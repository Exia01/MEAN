import { Component, OnInit, Optional } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations'; // this imports the animations for us to use within this component
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', // by default we have the hmtl route. this is the value assigned to the templateUrl component
  // template: `
  // <p>This is my html<p>
  // `, // alternatively, if there is not much we can change the url route to directly appending or
  // adding this to whatever doc we would like.
  styleUrls: ['./home.component.scss'], // we can define the scss files, same goes to for this with the url
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query( ':enter', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
              style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
              style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
            ]))]), { optional: true }),

            query( ':leave', stagger('300ms', [
              animate('.6s ease-in', keyframes([
                style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
              ]))]), { optional: true }),
      ])
    ])
  ] // the first argument is the name of the animation
  // lost track of the whole animation process. oops.
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string = 'My goal';
  goals = []; // creates an array
  // itemCound = 4; // it can also be done as such
  // this is being generated  and exported trouhgh the home component

  constructor(private _data: DataService) { }  // this will enables us to do the dependcy injection.

  ngOnInit() {
    // this creates a two way data binding // this is also initated when the component loads
    this._data.goal.subscribe(res => this.goals = res); // this gives us access to the data from "data.service"
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length; // this will push the total count onto the html doc
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this._data.changeGoal(this.goals);  // everytime an item is added or removed it'll update that data
    this.itemCount = this.goals.length; // this will make the total count the length of the array
  }

  removeItem(i) {
    this._data.changeGoal(this.goals); // pulls the information form the home component
    this.goals.splice(i, 1); // the line clicked we will delete one line.
  }

  // We've referenced this._data.changeGoal() when the app loads, and when we add an item and remove an item.

}
