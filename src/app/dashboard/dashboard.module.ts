import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validation } from '../Shared/Validator';

import { GlobalApi } from '../shared/global-api';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [DashboardComponent],
  providers: [Validation, GlobalApi]
})

export class DashboardModule { }
