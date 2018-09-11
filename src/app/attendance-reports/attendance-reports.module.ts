import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { MonthlyReportsComponent } from './monthly-reports/monthly-reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendanceReportsRoutingModule } from './attendance-reports-routing.module';
import { Validation } from '../Shared/Validator';
import { GlobalApi } from '../shared/global-api';
import { AttendanceReportsService } from './attendance-reports.service';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ViewAttendanceReportsComponent } from './view-attendance-reports/view-attendance-reports.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,AttendanceReportsRoutingModule,HttpClientModule,BsDatepickerModule.forRoot(),SharedModule
  ],
  declarations: [DailyReportsComponent, MonthlyReportsComponent, ViewAttendanceReportsComponent],
  providers:[Validation,GlobalApi,AttendanceReportsService]
  
})
export class AttendanceReportsModule { }
