import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class/class.component';
import { SubjectComponent } from './subject/subject.component';
import { AssignToTeacherComponent } from './assign-to-teacher/assign-to-teacher.component';
import { TimetableRoutingModule } from './timetable-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Validation } from '../Shared/Validator';
import { TimetableService } from './timetable.service';
import { GlobalApi } from '../shared/global-api';


@NgModule({
  imports: [
    CommonModule, TimetableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ClassComponent, SubjectComponent,  AssignToTeacherComponent],
  providers:[Validation,TimetableService,GlobalApi]
})
export class TimetableModule { }

