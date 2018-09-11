import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ScheduleExamComponent } from './schedule-exam/schedule-exam.component';
import { MarksComponent } from './marks/marks.component';
import { ReportsComponent } from './reports/reports.component';
import { ExamRoutingModule } from './exam-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validation } from '../Shared/Validator';
import { GlobalApi } from '../shared/global-api';
import { ExamService } from './exam.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { GradesComponent } from './grades/grades.component';
import { TimepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule, ExamRoutingModule, FormsModule, BsDatepickerModule.forRoot(), HttpClientModule, ModalModule,
    ReactiveFormsModule, TimepickerModule.forRoot()
  ],
  declarations: [AddExamComponent, ScheduleExamComponent, MarksComponent, ReportsComponent, GradesComponent],
  providers: [ExamService, GlobalApi, Validation]
})
export class ExamModule { }
