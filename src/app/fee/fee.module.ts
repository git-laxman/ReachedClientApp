import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFeeAmountComponent } from './add-fee-amount/add-fee-amount.component';
import { ConcessionComponent } from './concession/concession.component';
import { FeeRoutingModule } from './fee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validation } from '../Shared/Validator';
import { GlobalApi } from '../shared/global-api';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { FeeService } from './fee.service';
// import { MatSelectModule } from '@angular/material/select';
import { InstallmentsComponent } from './installments/installments.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, FeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, ModalModule.forRoot(),
    //  MatSelectModule
  ],
  declarations: [AddCourseComponent, AddFeeAmountComponent, ConcessionComponent, InstallmentsComponent],
  providers: [Validation, GlobalApi, FeeService]
})
export class FeeModule { }
