import { Component,OnInit } from '@angular/core';
import { TwitterService } from '../../../shared/services/twitter.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss'],
  providers: [TwitterService],
})
export class TwitterComponent implements OnInit  {

  constructor(private twitter: TwitterService){ }

  result = [];
  getTweets = function(){
    this.twitter.getTweets().catch(err =>  {
      document.getElementById("twitterConnect").style.display = "block";
    }).subscribe(
      data => {
        document.getElementById("twitterConnect").style.display = "none";
        this.result = data;
      })
  };
  ngOnInit(){
    this.getTweets();
  }

  getHomeTimeline() {
    this.getTweets();
  }

  connectToTwitter(){
    location.href = "/api/auth/twitter";
  }
}
