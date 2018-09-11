import { Injectable } from '@angular/core';
import { Course } from '../Common/Course';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { Expenditure, BalancePayment, NewPayment } from '../Common/expenditure';

@Injectable()
export class ExpenditureService {

  constructor(private http: HttpClient, private global: GlobalApi) { }

  insertexpendituredetails(expenditure: Expenditure) {
    return this.http.post(this.global.Insertexpenditure, expenditure);
  }

  RemoveExpendituredetails(expenditure: Expenditure) {
    return this.http.post(this.global.deleteexpenditureamount, expenditure);
  }

  getExpendituredetails() {
    return this.http.get(this.global.getexpenditurelistdetails);
  }

  getExpenditureRecord(expenditureId: any) {
    return this.http.get(this.global.getexpenditurerecord, expenditureId);
  }

  updateExpendituredetails(expenditure: Expenditure) {
    return this.http.post(this.global.updateexpenditure, expenditure);
  }


  ///// new payment

  insertnewpayment(newpayment: NewPayment) {
    return this.http.post(this.global.insertnewpayment, newpayment);
  }

  DeletenewpaymentRecord(newpaymentID) {
    return this.http.post(this.global.DeletenewpaymentRecord, newpaymentID);
  }

  RetrieveNewPaymentList() {
    return this.http.get(this.global.RetrieveNewPaymentList);
  }

  GetnewpaymentRecord(newpaymentID) {
    return this.http.get(this.global.GetnewpaymentRecord, newpaymentID);
  }

  updatenewpayment(newpayment: NewPayment) {
    return this.http.post(this.global.updatenewpayment, newpayment);
  }

  ////////// Balance Payment

  insertbalancepayment(balancepayment: BalancePayment) {
    return this.http.post(this.global.insertbalancepayment, balancepayment);
  }

  DeleteBalancePaymentRecord(balancepaymentID) {
    return this.http.post(this.global.DeleteBalancePaymentRecord, balancepaymentID);
  }

  RetrieveBalancePaymentlist() {
    return this.http.get(this.global.RetrieveBalancePaymentlist);
  }

  GetBalancePaymentRecord(balancepaymentID) {
    return this.http.get(this.global.GetBalancePaymentRecord, balancepaymentID);
  }

  updatebalancepayment(balancepayment: BalancePayment) {
    return this.http.post(this.global.updatebalancepayment, balancepayment);
  }

  RetrieveCategoryDD() {
    return this.http.get(this.global.RetrieveCategoryDD);
  }


}
