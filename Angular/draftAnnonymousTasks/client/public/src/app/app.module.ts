import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { FormsModule } from '@angular/forms';
import { NoteService } from './note.service';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, NewNoteComponent, TasksComponent, TaskComponent, AboutComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
