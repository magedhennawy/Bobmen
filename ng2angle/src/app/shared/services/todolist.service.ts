import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ToDoListService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/todolist')
      .map((res:Response) => res.json());
  }

  addItem(item) {
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
  }
}
