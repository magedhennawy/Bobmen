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


  getEvents(){
    return this.http.get('/api/google/events')
      .catch(err =>  {
        return Observable.throw(err.status); // observable needs to be returned or exception raised
      })
      .map((res:Response) => res.json());
  }

}
