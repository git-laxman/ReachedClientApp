import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyReportsComponent } from './daily-reports/daily-reports.component';
import { MonthlyReportsComponent } from './monthly-reports/monthly-reports.component';
import { ViewAttendanceReportsComponent } from './view-attendance-reports/view-attendance-reports.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dailyattendance',
        component: DailyReportsComponent,
        data: {
          title: 'Daily Attendance'
        }
      },
      {
        path: 'monthlyattendance',
        component: MonthlyReportsComponent,
        data: {
          title: 'Monthly Attendance'
        }
      },
      {
        path: 'viewattendance',
        component: ViewAttendanceReportsComponent,
        data: {
          title: 'View Attendance'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceReportsRoutingModule { }
