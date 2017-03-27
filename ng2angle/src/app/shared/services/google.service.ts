import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GoogleService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getEmails() {
    return this.http.get('/api/google/emails')
      .catch(err =>  {
        return Observable.throw(err.status); // observable needs to be returned or exception raised
      })
      .map((res:Response) => res.json());
  }

  getEvents() {
    return this.http.get('/api/google/events')
      .catch(err =>  {
        return Observable.throw(err.status); // observable needs to be returned or exception raised
      })
      .map((res:Response) => res.json());
  }

  /*addItem(item) {
   return this.http.post('/api/todolist',item)
   .map((res:Response) => res.json());
   }

   editItem(item) {
   return this.http.patch('/api/todolist',item)
   .map((res:Response) => res.json());
   }

   deleteItem(index) {
   return this.http.delete('/api/todolist/'+index)
   .map((res:Response) => res.json());
   }*/
}
