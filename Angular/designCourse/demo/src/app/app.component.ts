import { Component } from '@angular/core'; // these are all the import components

@Component({ // these are all the componenet decorator // can define the structure of the app component.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // type of style
})
export class AppComponent {
  title = 'app';
} // these are the logic resides for the angular app.
