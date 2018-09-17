import { TasksComponent } from './tasks/tasks.component';
import { AboutComponent } from './about/about.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: NewNoteComponent,
    children: [
      {
        path: '',
        component: TasksComponent
      }
    ]
  },
  {
    path: 'about/:id',
    component: AboutComponent
  }
  // {
  //   path: '**',
  //   component: NotFouondComponent
  // }
]; // this sets up the paths

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
