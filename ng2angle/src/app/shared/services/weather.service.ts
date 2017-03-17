import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService{

  constructor(private http: Http) {  }

  // Get weather from API
  getWeatherByCity(city: String){
    console.log("got into service, city is",city)
    return this.http.get('/api/weatherbycity/'+city,{})
    .map(response => response.json());
  }

}
