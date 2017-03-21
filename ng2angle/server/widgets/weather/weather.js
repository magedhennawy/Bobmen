/**
 * Created by Paul on 3/10/2017.
 */
var cityList = require('./city.list.json');
var Weather = require('./weather.model.js');
var request = require('request');


function getCityList(req, res, next){
  res.json(cityList);
}

function getWeather(req, res, next){
  Weather.findOne({_id: req.session.user._id},function(err,data){
    if(err){
      console.log(err);
      res.status(500).json({error: err})
    }
    else{
      var APPID = '70ee68569d2e0954be0ddb2d55fb1786';
      var Domain = 'http://api.openweathermap.org/data/2.5/weather?q=';
      var City = data.cityId;
      var Country = data.countryId;
      var units = 'metric';
      console.log()
      if(data.celsius != true){
        units = 'imperial';
      }
      var apiUrl = Domain+City+','+Country+'&appid='+APPID+'&units='+units;
      request.get(apiUrl, function(err, response, body){
        if(err){
          console.log(err);
          res.status(500).send({error: err})
        }
        else{
          res.send(body);
        }
      })
    }
  })
}

function updateWeatherSettings(req, res, next){
  Weather.findOneAndUpdate({_id: req.session.user._id},
    {$set: {celsius: req.body.celcius, cityId: req.body.cityId, countryId: req.body.countryId}},
    {upsert: true, new: true},
    function(err, data){
      if(err){
        res.status(500).json({error: err})
      }
      else{
        //res.json(data);
        getWeather(req, res, next);
      }
  })
}


function getWeatherSettings(req,res,next){
  Weather.findOne({_id: req.userId},function(err,data){
    if(err){
      res.status(500).json({error: err})
    }
    else{
      res.json(data);
    }
  })
}


module.exports = {
  getWeatherSettings: getWeatherSettings,

  updateWeatherSettings: updateWeatherSettings,

  getWeather: getWeather,

  getCityList: getCityList
};
