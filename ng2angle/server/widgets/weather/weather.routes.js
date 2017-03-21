/**
 * Created by Paul on 3/10/2017.
 */

var express = require('express');
var weather = require('./weather');
var router = express.Router();

router.get('/weather/', weather.getWeather);
router.post('/weather/settings', weather.updateWeatherSettings);
router.get('/weather/settings', weather.getWeatherSettings);
router.get('/weather/cityList', weather.getCityList);


module.exports = router;
