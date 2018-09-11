import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFeeAmountComponent } from './add-fee-amount/add-fee-amount.component';
import { ConcessionComponent } from './concession/concession.component';
import { Routes, RouterModule } from '@angular/router';
import { InstallmentsComponent } from './installments/installments.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addcourse',
        component: AddCourseComponent,
        data: {
          title: 'Add Course'
        }
      },
      {
        path: 'addfeeamount',
        component: AddFeeAmountComponent,
        data: {
          title: 'Add Fee Amount'
        }
      },
      {
        path: 'concession',
        component: ConcessionComponent,
        data: {
          title: 'Concession'
        }
      },
      {
        path: 'installments',
        component: InstallmentsComponent,
        data: {
          title: 'Installments'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeeRoutingModule { }
