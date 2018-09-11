import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { SubjectComponent } from './subject/subject.component';
import { AssignToTeacherComponent } from './assign-to-teacher/assign-to-teacher.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'class',
        component: ClassComponent,
        data: {
          title: 'Class'
        }
      },
      {
        path: 'subject',
        component: SubjectComponent,
        data: {
          title: 'Subject'
        }
      },
      {
        path: 'aot',
        component: AssignToTeacherComponent,
        data: {
          title: 'Assign Teacher to Class'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimetableRoutingModule { }
