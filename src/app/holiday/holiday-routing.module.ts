import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHolidayComponent } from './create-holiday/create-holiday.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'createholiday',
        component: CreateHolidayComponent,
        data: {
          title: 'Create Holiday'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidayRoutingModule { }
