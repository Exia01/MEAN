import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // this will enable us to do a depency injection. Simmilar to the HTTP service.
import { Router } from '@angular/router'; // this is a component based router navigation
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any; // defines the goals 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _data: DataService
  ) {
    // the injection happens here.
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res => (this.goals = res));
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
