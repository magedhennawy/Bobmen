import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss'],
})
export class TwitterComponent implements OnInit  {


  ngOnInit(){
  }


  connectToTwitter(){
    location.href = "/api/auth/twitter";
  }

}
