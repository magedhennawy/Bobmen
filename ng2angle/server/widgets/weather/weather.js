/**
 * Created by Paul on 3/10/2017.
 */
var cityList = require('./city.list.json');
var Weather = require('./weather.model.js');
var request = require('request');


function getCityList(req, res, next){
  res.json(cityList);
}

function updateWeatherSettings(req, res, next){
  Weather.update({userId: req.userId}, {$set: {celcius: req.body.celcius, cityId: req.body.cityId}},function(err, data){
    if(err){
      res.status(500).json({error: err})
    }
    else{
      res.json(data);
    }
  })
}


function getWeatherSettings(req,res,next){
  Weather.findOne({userId: req.userId},function(err,data){
    if(err){
      res.status(500).json({error: err})
    }
    else{
      res.json(data);
    }
  })
}

function getWeather(req,res,next){
  Weather.findOne({userid: req.session.user._id},function(err,data){
    if(err){
      console.log(err);
      res.status(500).json({error: err})
    }
    else{
      var APPID = '70ee68569d2e0954be0ddb2d55fb1786';
      var Domain = 'http://api.openweathermap.org/data/2.5/weather?q=';
      var City = 'Toronto';
      var Country = 'ca'
      var apiUrl = Domain+City+','+Country+'&appid='+APPID+'&units=metric';
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

module.exports = {
  getWeatherSettings: getWeatherSettings,

  updateWeatherSettings: updateWeatherSettings,

  getWeather: getWeather,

  getCityList: getCityList
};
