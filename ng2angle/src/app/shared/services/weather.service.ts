import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService{

  constructor(private http: Http) {  }

  // Get weather from API
  getWeather(){
    return this.http.get('/api/weather',{}).map(response => response.json());
  }

}
