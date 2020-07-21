import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboradComponent } from './dashborad/dashborad.component';

const routes: Routes = [
  { path:"dashboard", component:DashboradComponent},
  { path:"about", component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
