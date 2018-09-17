import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // this is the root route for it as well.
import { AboutComponent } from './about/about.component'; // this second route to it as well.

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about/:id',  // Add /:id here
    component: AboutComponent
  }
]; // this sets up the paths

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

