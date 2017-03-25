import { Component,OnInit } from '@angular/core';
import { GoogleService } from '../../../shared/services/google.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
  providers: [GoogleService],
})
export class GoogleComponent implements OnInit  {

  constructor(private google: GoogleService){ }

  result = [];
  getEmails = function(){
    this.google.getEmails().catch(err =>  {
      document.getElementById("googleConnect").style.display = "block";
    }).subscribe(
      data => {
        document.getElementById("googleConnect").style.display = "none";
        this.result = data.threads;
      })
  };
  ngOnInit(){
    this.getEmails();
  }

  getHomeTimeline() {
    this.getEmails();
  }

  connectToGoogle(){
    location.href = "/api/auth/google";
  }
}
