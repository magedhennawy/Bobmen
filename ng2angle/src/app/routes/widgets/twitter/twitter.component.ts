import { Component } from '@angular/core';
import { TwitterService } from 'ng2-twitter';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html'
})
export class TwitterComponent {
  title = 'app works!';
  result = '';
  constructor(private twitter: TwitterService){ }

  getHomeTimeline(){
    this.twitter.get(
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
    });
  }
}
