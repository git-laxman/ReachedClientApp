import { Injectable } from '@angular/core';

import { Student } from '../Common/Student';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';

@Injectable()
export class StudentService {
  // readonly rootUrl = 'http://localhost:35257';

  constructor(private http: HttpClient, private global: GlobalApi) { }

  RegisterSingleStudent(studentdata: Student) {
    // var reqHeader = new HttpHeaders({'No-Auth':'True'});
    //,{headers : this.global.reqHeader}
    debugger;
    return this.http.post(this.global.SingleStudentRegister, studentdata);
  }
  GetSingleStudentList() {
    return this.http.get(this.global.GetSingleStudentList);
  }
  GetStudent(studdentid: any) {
    return this.http.get(this.global.GetSingleStudent, studdentid);
  }
  UpdateSingleStudent(studentdata: Student) {
    return this.http.post(this.global.UpdateSingleStudent, studentdata);
  }
  DeleteSingleStudent(studentid) {
    return this.http.post(this.global.DeleteSingleStudent, studentid);
  }


  RegisterMultipleStudents(studentdata: Student[]) {
    return this.http.post(this.global.MultiStudentRegister, studentdata);
  }

  DeleteStudentRecord(studentdata: Student) {
    return this.http.post(this.global.DeleteStudent, studentdata);
  }

}
