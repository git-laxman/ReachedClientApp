import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReachedadminsComponent } from './reachedadmins/reachedadmins.component';
import { ReachedAdminsRoutingModule } from './reachedadmins-routing.module';
import { ReachedadminService } from './reachedadmin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { GlobalApi } from '../shared/global-api';
import { Validation } from '../Shared/Validator';

@NgModule({
  imports: [
    CommonModule,ReachedAdminsRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,BsDatepickerModule.forRoot()
  ],
  declarations: [ReachedadminsComponent],
  providers:[ReachedadminService,GlobalApi,Validation]
})
export class ReachedAdminsModule { }
