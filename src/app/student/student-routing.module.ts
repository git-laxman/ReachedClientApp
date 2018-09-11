import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleStudentComponent } from './single-student/single-student.component';
import { MultipleStudentsComponent } from './multiple-students/multiple-students.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'singlestudent',
        component: SingleStudentComponent,
        data: {
          title: 'Single Student'
        }
      },
      {
        path: 'multiplestudents',
        component: MultipleStudentsComponent,
        data: {
          title: 'Multiple Students'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule { }
