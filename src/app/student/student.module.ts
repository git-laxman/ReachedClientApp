import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleStudentComponent } from './single-student/single-student.component';
import { MultipleStudentsComponent } from './multiple-students/multiple-students.component';
import { StudentRoutingModule } from './student-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validation } from '../Shared/Validator';
import { GlobalApi } from '../shared/global-api';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { CommondataService } from '../shared/commondata.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [SingleStudentComponent, MultipleStudentsComponent],
  providers:[Validation,GlobalApi,StudentService,CommondataService]
})
export class StudentModule { }
