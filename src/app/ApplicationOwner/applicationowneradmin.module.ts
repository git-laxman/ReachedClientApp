import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationowneradminloginComponent } from './applicationownerdminlogin/applicationowneradminlogin.component';
import { ParentapplicationowneradminComponent } from './parentapplicationowneradmin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SuperadminloginComponent } from '../superadmin/superadminlogin/superadminlogin.component';
import { ApplicationownerAdminRoutingModule } from './ApplicationownerAdminRoutingModule';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule ,
    ApplicationowneradminModule,
    ApplicationownerAdminRoutingModule,
    ReactiveFormsModule,
    HttpModule,HttpClientModule,
    NgxSpinnerModule
  ],
  declarations: [ApplicationowneradminloginComponent, ParentapplicationowneradminComponent]
})
export class ApplicationowneradminModule { }
