// import { TaskComponent } from '../task/task.component';
import { NoteService } from '../note.service'; // '../note.service'  --> might have to be like this instead for some reason.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  private tasks: any;
  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.all(data => {
      // console.log(data);
      this.tasks = data;
      // console.log(this.tasks);
    });

    this.noteService.attach(this);
  }
  update(data, action) {
    if (action === 'create') {
      this.tasks.push(data);
    } else {
      let index;
      for (const task of this.tasks) {
        if (task._id === data._id) {
          index = this.tasks.indexOf(task);
        }
      }
      this.tasks.splice(index, 1);
    }
    // removeTask(data) {
    //  console.log(data); // I thought it was here. Not really.
    // }
  }
}
