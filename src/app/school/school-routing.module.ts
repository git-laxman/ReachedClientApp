import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSchoolComponent } from './add-school/add-school.component';
import { ActiveSchoolsComponent } from './active-schools/active-schools.component';
import { InActiveSchoolsComponent } from './in-active-schools/in-active-schools.component';
import { TrailSchoolsComponent } from './trail-schools/trail-schools.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addschool',
        component: AddSchoolComponent,
        data: {
          title: 'Add School'
        }
      },
      {
        path: 'activeschools',
        component: ActiveSchoolsComponent,
        data: {
          title: 'Active Schools'
        }
      },
      {
        path: 'inactiveschools',
        component: InActiveSchoolsComponent,
        data: {
          title: 'Incative Schools'
        }
      },
      {
        path: 'trailschools',
        component: TrailSchoolsComponent,
        data: {
          title: 'Trail Schools'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolRoutingModule { }
