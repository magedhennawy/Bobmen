import { Component,OnInit } from '@angular/core';
import { TwitterService } from '../../../shared/services/twitter.service';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html'
})
export class TwitterComponent implements OnInit  {

  constructor(private twitter: TwitterService){ }

  result = [];
  ngOnInit() {}

  getHomeTimeline() {

    this.twitter.getTweets().subscribe(data=>{
      this.result = data;
    });

    /*    this.twitter.getTweets().subscribe(res => {
      this.result = res.json().map(tweet => tweet.text);
    });*/
  }
  /*result = '';
  constructor(private twitter: TwitterService){ }

  ngOnInit() {
/!*    this.ToDoListService.getAllPosts().subscribe(data =>{
      if(data.length > 0){
        this.items = data[0].toDoList;
      }else{
        this.items = [];
      }
    })*!/
  }

  getHomeTimeline(){
    this.twitter.getTweets().subscribe(res =>{
      this.result = res.json().map(tweet => tweet.text);
    });

    /!*    this.twitter.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      {
        count: 5
      },
      {
        consumerKey: 'FXDtQ7RZtklmxUDEF1EYo1jwG',
        consumerSecret: 'eMUZrNImOdeIX9xH8Qjfr5uGrmjtlFQyhY1QlLfuZwalv8mW3A'
      },
      {
        token: '319691429-Dt2DKEdlzYylV58aefumrpXM32WOFKDpzDnbNnWf',
        tokenSecret: 'QIRKC06Wu5ExtiT6LMOmJ9YL3BRD4loLmtmEUMdt9tbnx'
      }
    ).subscribe((res)=>{
      this.result = res.json().map(tweet => tweet.text);
    });*!/
  }*/
}
