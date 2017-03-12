import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService{

  // Get all posts from the API
  signIn(){
    return this.http.post('/api/user/signin',{username:"kek2",password:"kek"})
      .map(response => response.json());
  }

  constructor(private http: Http) {  }


}
