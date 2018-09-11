import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenditureComponent } from './expenditure.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { BalancePaymentComponent } from './balance-payment/balance-payment.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addcategories',
        component: ExpenditureComponent,
        data: {
          title: 'Expenditure'
        },

      },
      {
        path: 'newpayment',
        component: NewPaymentComponent,
        data: {
          title: 'New Payment'
        },

      },
      {
        path: 'balancepayment',
        component: BalancePaymentComponent,
        data: {
          title: 'Balance Payment'
        }

      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenditureRoutingModule { }
