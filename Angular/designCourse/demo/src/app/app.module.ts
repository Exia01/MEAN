import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this imports the animations for us to use.
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  imports: [
    BrowserAnimationsModule, // we need to make sure we import it as well.
    BrowserModule,
    AppRoutingModule,
    FormsModule // in this instance we added a forms module to get this working
    // it also needs to be added at the top.
  ],
  providers: [DataService], // this connects the data service
  bootstrap: [AppComponent]
})
export class AppModule {}
