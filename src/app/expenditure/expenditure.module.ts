import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenditureComponent } from './expenditure.component';
import { ExpenditureRoutingModule } from './expenditure-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validation } from '../Shared/Validator';
import { GlobalApi } from '../shared/global-api';
import { ExpenditureService } from './expenditure.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { BalancePaymentComponent } from './balance-payment/balance-payment.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    ExpenditureRoutingModule, FormsModule,
    ReactiveFormsModule,
    HttpClientModule, ModalModule.forRoot(), NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [ExpenditureComponent, NewPaymentComponent, BalancePaymentComponent, NewPaymentComponent],
  providers: [Validation, GlobalApi, ExpenditureService]
})
export class ExpenditureModule { }
