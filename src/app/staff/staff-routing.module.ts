import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: 'Teacher',
    component: TeacherComponent,
    data: {
      title: 'Teacher'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule { }