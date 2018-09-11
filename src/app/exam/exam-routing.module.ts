import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExamComponent } from './add-exam/add-exam.component';
import { MarksComponent } from './marks/marks.component';
import { ScheduleExamComponent } from './schedule-exam/schedule-exam.component';
import { ReportsComponent } from './reports/reports.component';
import { GradesComponent } from './grades/grades.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addexam',
        component: AddExamComponent,
        data: {
          title: 'Add Exam'
        }
      },
      {
        path: 'scheduleexam',
        component: ScheduleExamComponent,
        data: {
          title: 'Exam Schedule'
        }
      },
      {
        path: 'marks',
        component: MarksComponent,
        data: {
          title: 'Marks'
        }
      },
      {
        path: 'reports',
        component: ReportsComponent,
        data: {
          title: 'Reports'
        }
      },
      {
        path: 'grade',
        component: GradesComponent,
        data: {
          title: 'Grades'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamRoutingModule { }
