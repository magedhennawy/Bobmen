import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class authService{

  // Get all posts from the API
  signIn(){
    return this.http.post('/api/todolist',{username:"kek2",password:"kek"})
      .map((res:Response) => res.json());
  }

  constructor(private http: Http) {  }


}
