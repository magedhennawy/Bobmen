import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-twitter',
  templateUrl: 'facebook.component.html',
  styleUrls: ['facebook.component.scss'],
})
export class FacebookComponent implements OnInit  {


  ngOnInit(){
  }


  connectToFacebook(){
    location.href = "/api/auth/facebook";
  }

}
