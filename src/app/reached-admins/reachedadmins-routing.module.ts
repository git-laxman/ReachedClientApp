import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReachedadminsComponent } from './reachedadmins/reachedadmins.component';
const routes: Routes = [
  {
    path: '',
    component: ReachedadminsComponent,
    data: {
      title: 'Reached Admins'
    },

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReachedAdminsRoutingModule { }
