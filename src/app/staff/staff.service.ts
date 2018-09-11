import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { Teacher } from '../Common/Teacher';


@Injectable()
export class StaffService {

  constructor(private http: HttpClient, private global: GlobalApi) { }

  //Teachers
  RegisterTeacher(teacherdata: Teacher) {
    return this.http.post(this.global.RegisterTeacher, teacherdata);
  }
  GetTeachers() {
    return this.http.get(this.global.GetTeachers);
  }
  UpdateTeacher(teacherdata: Teacher) {
    return this.http.post(this.global.UpdateTeacher, teacherdata);
  }
 DeleteTeacher(teacherid)
 {
  return this.http.post(this.global.DeleteTeacher, teacherid);
   
 }

  
}
