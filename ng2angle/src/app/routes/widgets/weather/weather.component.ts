import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../shared/services/weather.service';

declare var $: any;

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
    providers: [WeatherService],
})
export class WeatherComponent implements OnInit {
  weather: Object;

  constructor(private WeatherService: WeatherService) { }
    ngOnInit(){
      this.WeatherService.getWeather().subscribe(
        data => {
          this.weather = data;
          console.log(this.weather);
        })
    }

    getWeatherByCity(city){
      console.log(city);
    }
}
