import { Component,OnInit } from '@angular/core';
import { GoogleService } from '../../../shared/services/google.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [GoogleService],
})
export class CalendarComponent implements OnInit  {

  constructor(private google: GoogleService){ }

  result = [];
  getEvents = function(){
    this.google.getEvents().catch(err =>  {
    }).subscribe(
      data => {
        this.result = data;
        var items = this.result.items;
        for(var i=0; i<items.length; i++){
          if(items[i].start.date == null){
            items[i].start.dateTime = new Date(items[i].start.dateTime);
            items[i].end.dateTime = new Date(items[i].end.dateTime);
          }
          else{
            items[i].start.date = new Date(items[i].start.date);
            items[i].end.date= new Date(items[i].end.date);
          }
        }
      })
  };
  ngOnInit(){
    this.getEvents();
  }

  connectToGoogle(){
    location.href = "/api/auth/google";
  }
}
