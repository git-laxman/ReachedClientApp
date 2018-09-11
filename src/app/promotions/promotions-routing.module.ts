import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaiseQuestionComponent } from './raise-question/raise-question.component';
import { UploadPicsComponent } from './upload-pics/upload-pics.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'raisequestion',
        component: RaiseQuestionComponent,
        data: {
          title: 'Raise a Question'
        }
      },
      {
        path: 'uploadpics',
        component: UploadPicsComponent,
        data: {
          title: 'Upload Pics'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionsRoutingModule { }
