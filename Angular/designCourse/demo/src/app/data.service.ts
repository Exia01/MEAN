import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; // this is a decorator??
// a function that provides information about the class provided to it

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable(); // this is a private class, this is where we will set the default values of the goals array

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
