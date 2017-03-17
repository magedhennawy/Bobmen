import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService{

  user: Object;

  // Get all posts from the API
  signIn(username, password){
    return this.http.post('/api/user/signin',{username: username,password: password})
      .map(response => response.json());
  }

  setUser(username){
    this.router.navigate(['/home']);

  }

  isLoggedIn(){
    if(Cookie.get('username')) return true;
    return false

  }

  signOut(){
    return this.http.get('/api/user/signout')
      .map(response => response.json());
  }

  processSignOut(){
    this.router.navigate(['/login']);
  }

  signUp(username, password){
    return this.http.put('/api/user',{username: username,password: password})
      .map(response => response.json());
  }

  processSignUp(){
    this.router.navigate(['/login']);
  }

  constructor(private http: Http, private router : Router) {

  }


}
