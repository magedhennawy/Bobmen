import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PasswordSaverService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/passwordsaver')
      .map((res:Response) => res.json());
  }

  addItem(item) {
    return this.http.post('/api/passwordsaver',item)
      .map((res:Response) => res.json());
  }

  editItem(item) {
    return this.http.patch('/api/passwordsaver',item)
      .map((res:Response) => res.json());
  }

  deleteItem(index) {
    return this.http.delete('/api/passwordsaver/'+index)
      .map((res:Response) => res.json());
  }
}
