import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task;

  constructor(private ns: NoteService, private router: Router) {
    this.task = {
      title: '',
      description: ''
    };
  }
  removeTask(task) {
    // console.log(task);
    this.ns.remove(task, data => {
      this.ns.notify(task, 'delete');
    });
  }
  // taskInfo(task) {
  //   console.log(task);
  //   this.router.navigate(['/about/', + task._id]);
  // }
  ngOnInit() {}
}
