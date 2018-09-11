import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaiseQuestionComponent } from './raise-question/raise-question.component';
import { UploadPicsComponent } from './upload-pics/upload-pics.component';
import { PromotionsRoutingModule } from './promotions-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validation } from '../Shared/Validator';
import { GlobalApi } from '../shared/global-api';
import { PromotionsService} from './promotions.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule, PromotionsRoutingModule, FormsModule, HttpClientModule, ModalModule,
    ReactiveFormsModule
  ],
  declarations: [RaiseQuestionComponent, UploadPicsComponent],
  providers: [PromotionsService, GlobalApi, Validation]
})
export class PromotionsModule { }
