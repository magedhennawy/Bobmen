import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService{

  constructor(private http: Http) {  }

  // Get weather from API
  getWeather(){
    var APPID = '70ee68569d2e0954be0ddb2d55fb1786';
    var Domain = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var City = 'Toronto';
    var Country = 'ca'
    var API = Domain+City+','+Country+'&appid='+APPID+'&units=metric';
    console.log(API)
    return this.http.get(API,{}).map(response => response.json());
  }

}
