import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private AuthService: AuthService) {

    }

    ngOnInit(){
      this.AuthService.signIn()
        .subscribe(
          username => console.log(username),
          error => console.error('Error ' + error),
          () => console.log('Completed!')
        )
    }


}
