import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Validation } from '../Shared/Validator';
import { GlobalApi } from '../shared/global-api';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffService } from './staff.service';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StaffRoutingModule
  ],
  declarations: [TeacherComponent],
  providers:[Validation,StaffService,GlobalApi]
})
export class StaffModule { }

