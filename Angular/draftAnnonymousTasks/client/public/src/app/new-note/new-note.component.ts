import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service'; // we import the service to have access to either the apis (database) or --
// the front end arrays that display the information

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  private task;

  constructor(private ns: NoteService) { // this creates an instance of our note service
    this.task = {
      title: '',
      description: ''
    };
  }

  ngOnInit() {}

  createNote() {
    this.ns.create(this.task, data => {
      // console.log(data);
      this.ns.notify(data, 'create');
    });

    this.task = {
      title: '',
      description: ''
    };
  }
  // removeTask() {
  //     console.log('NewNoteComponent clicked!');
  //   } // this isn't needed here because the data is not coming in to this component.
}
