import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {
  constructor(private http: HttpClient) {}

  private listeners = [];

  attach(component) {
    this.listeners.push(component);
  }

  notify(data, action) {
    for (const listener of this.listeners) {
      listener.update(data, action);
    }
  }

  all(cb) {
    // console.log(this.listeners);
    this.http.get('/api/tasks').subscribe(data => cb(data)); // find all tasks
  }
  get(id, cb) {
    console.log(id);
    this.http.get('/api/tasks/' + id).subscribe(data => cb(data)); // find a tasks
  }
  create(task, cb) {
    this.http.post('/api/tasks', task).subscribe(data => cb(data)); // suscribe this is an observable. It suscribes to the data.
  }
  update(task, cb) {
    this.http.put('/api/tasks/' + task._id, task).subscribe(data => cb(data)); // update the task
  }
  remove(task, cb) {
    this.http.delete('/api/tasks/' + task._id).subscribe(data => cb(data)); // delete the tasks
  }
}
