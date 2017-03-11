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
  Weather.findOne({userId: req.userId},function(err,data){
    if(err){
      console.log(err);
      res.status(500).json({error: err})
    }
    else{
      request.get('http://openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=b1b15e88fa797225412429c1c50c122a1',
        function(err, response, body){
        if(err){
          console.log(err);
          res.status(500).send({error: err})
        }
        else{
          console.log(body);
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
