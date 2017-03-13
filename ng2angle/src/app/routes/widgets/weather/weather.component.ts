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
  weather = {main:{humidity:5}};

  constructor(private WeatherService: WeatherService) { }

    ngOnInit(){
      this.WeatherService.getWeather().subscribe(
        main => {
          this.weather = main;
          console.log(this.weather);
        })
    }



}
