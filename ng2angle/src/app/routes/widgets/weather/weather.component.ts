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
  shown: String;
  iconUrl: String;

  constructor(private WeatherService: WeatherService) { }
    ngOnInit(){
      this.WeatherService.getWeather().subscribe(
        data => {
          this.weather = data;
          this.shown = "app";
          var iconCode = data.weather[0].icon;
          this.iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
        })
    }

    updateWeatherSettings(city, country, metric){
      console.log(city, country, metric);
      if((city!='')||(country!='')){
        this.WeatherService.updateWeatherSettings(city, country, metric).subscribe(
          data => {
            this.weather = data;
            this.shown = "app";
          })
      }
    }
}
