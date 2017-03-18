import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService{

  constructor(private http: Http) {  }

  // Get weather from API
  getWeather(){
    return this.http.get('/api/weather/',{})
    .map(response => response.json());
  }

  updateWeatherSettings(city: String, country:String, metric:Boolean){
    var data = {cityId:city, countryId:country, celcius:metric};
    return this.http.post('/api/weather/settings',data)
    .map(response => response.json());
  }

}
