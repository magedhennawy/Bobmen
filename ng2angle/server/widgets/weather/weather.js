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
      res.status(500).json({error: err})
    }
    else{
      request.get('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=00145b0833787fc23c5c70f0351bbd6d',
        function(err, response, body){
        if(err){
          res.status(500).json({error: err})
        }
        else{
          res.json(body);
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
