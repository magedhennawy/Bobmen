"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    // Get weather from API
    WeatherService.prototype.getWeather = function () {
        return this.http.get('/api/weather/', {})
            .map(function (response) { return response.json(); });
    };
    WeatherService.prototype.updateWeatherSettings = function (city, country, metric) {
        var data = { cityId: city, countryId: country, celcius: metric };
        return this.http.post('/api/weather/settings', data)
            .map(function (response) { return response.json(); });
    };
    WeatherService = __decorate([
        core_1.Injectable()
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
