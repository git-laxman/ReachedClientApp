import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSchoolComponent } from './add-school/add-school.component';
import { TrailSchoolsComponent } from './trail-schools/trail-schools.component';
import { InActiveSchoolsComponent } from './in-active-schools/in-active-schools.component';
import { ActiveSchoolsComponent } from './active-schools/active-schools.component';
import { SchoolRoutingModule } from './school-routing.module';
import { SchoolService } from './school.service';
import { Validation } from '../Shared/Validator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,SchoolRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule,BsDatepickerModule.forRoot(),ModalModule.forRoot(),
  ],
  declarations: [AddSchoolComponent, TrailSchoolsComponent, InActiveSchoolsComponent, ActiveSchoolsComponent],
  providers:[SchoolService,Validation,GlobalApi]
})
export class SchoolModule { }
