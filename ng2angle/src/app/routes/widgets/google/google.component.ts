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
  Subjects = [];
  Dates = [];
  Froms = [];
  getEmails = function(){
    this.google.getEmails().catch(err =>  {
      document.getElementById("googleConnect").style.display = "block";
    }).subscribe(
      data => {
        document.getElementById("googleConnect").style.display = "none";
        this.result = data;
        for(var i=0;i<data.length;i++){
          var headers = data[i].payload.headers;
          for(var j=0;j<headers.length;j++){
            if(headers[j].name == "Date"){
              this.Dates.push(headers[j].value);
            }
            else if(headers[j].name == "Subject"){
              this.Subjects.push(headers[j].value);
            }
            else if(headers[j].name == "From"){
              this.Froms.push(headers[j].value);
            }
          }
        }
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
