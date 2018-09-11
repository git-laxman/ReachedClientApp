import { Injectable } from '@angular/core';
import { Course } from '../Common/Course';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { FeeAmount } from '../Common/feeamount';
import { Concession } from '../Common/concession';
import { Installments } from '../Common/installments';

@Injectable()
export class FeeService {


  constructor(private http: HttpClient, private global: GlobalApi) { }

  insertcoursedetails(coursedata: Course) {
    return this.http.post(this.global.InsertCourse, coursedata);
  }

  insertfeeamountdetails(fee: FeeAmount) {
    return this.http.post(this.global.Insertfeeamount, fee);
  }

  deletefeeamountdetails(fee: FeeAmount) {
    return this.http.post(this.global.deletefeeamount, fee);
  }

  RetrieveClassDetails() {
    return this.http.get(this.global.getclass);
  }

  RetrieveSectionDetails() {
    return this.http.get(this.global.getsection);
  }

  RetrieveCourseDetails() {
    return this.http.get(this.global.getcourse);
  }

  removeAddcoursedetails(course: Course) {
    return this.http.post(this.global.deleteaddcourse, course);
  }

  getAddcourselistdetails() {
    return this.http.get(this.global.getaddcourselistdetails);
  }

  getAddFeeAmountlistdetails() {
    return this.http.get(this.global.getaddfeeamountlistdetails);
  }

  getconcessionlist(obj) {
    return this.http.get(this.global.getconcessionlistdetails, obj);
  }

  getaddcoursetdetails(coursedata: Course) {
    return this.http.get(this.global.getconcessionlistdetails, coursedata.CourseID);
  }

  updatecoursedetails(coursedata: Course) {
    return this.http.post(this.global.UpdateCourse, coursedata);
  }

  updatefeeamountdetails(fee: FeeAmount) {
    return this.http.post(this.global.updatefeeamount, fee);
  }

  insertafterconcession(obj: Concession) {
    return this.http.post(this.global.insertstudentconcession, obj);
  }

  updateconcession(obj: Concession) {
    return this.http.post(this.global.updateconcession, obj);
  }

  RetrieveSubjectDetails() {
    return this.http.get(this.global.getsubjectdd);
  }

  updateInstallmentdetails(fee: Installments) {
    return this.http.post(this.global.updateInstallmentdetails, fee);
  }

  insertInstallmentdetails(obj: Installments) {
    return this.http.post(this.global.insertInstallmentdetails, obj);
  }

  getInstallmentlistdetails() {
    return this.http.get(this.global.getInstallmentlistdetails);
  }

  RemoveInstallmentdetails(installmentID) {
    return this.http.post(this.global.RemoveInstallmentdetails, installmentID);
  }

  RetrieveFeeAmountDetails() {
    return this.http.get(this.global.getfeeamountdd);
  }

  removeconcession(concessionID) {
    return this.http.post(this.global.removeconcession, concessionID);
  }

  getconcessionrecord(concessionID) {
    return this.http.get(this.global.getconcessionrecord, concessionID);
  }



}
