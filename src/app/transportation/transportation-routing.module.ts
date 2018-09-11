import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'adddriver',
        component: AddDriverComponent,
        data: {
          title: 'Add Driver'
        }
      },
      {
        path: 'addroute',
        component: AddRouteComponent,
        data: {
          title: 'Add Route'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportationRoutingModule { }
