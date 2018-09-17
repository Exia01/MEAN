import { TaskComponent } from './../task/task.component';
import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private task;

  constructor(
    private ns: NoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.task = {
      title: '',
      description: ''
    };
  }
  ngOnInit() {
    this.ns.get(this.route.params['_value']['id'], data => {
      console.log(this.route.params);
      this.task = data;
    });
  }
}
