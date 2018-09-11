import { Injectable } from '@angular/core';
import { Attendance, MontlyAttendance } from '../Common/Attendance';
import { HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
@Injectable()
export class AttendanceReportsService {

  constructor(private http: HttpClient, private global: GlobalApi) { }


 
  //Day Attendance Reposrts
  SaveDayAttendanceReport(data: Attendance) {
    return this.http.post(this.global.SaveDayAttendanceReport, data);
  }
  UpdateDayAttendanceReport(teacherdata: Attendance) {
    return this.http.post(this.global.UpdateDayAttendanceReport, teacherdata);
  }


    //Montly Attendance Reposrts
  SaveMonthAttendanceReport(data: MontlyAttendance)
  {
      return this.http.post(this.global.SaveMonthAttendanceReport, data);
  }
//View attendance

GenarateMonthAttendanceReport(data: MontlyAttendance) {
  return this.http.post(this.global.GenarateMonthAttendanceReport, data);
}

//   GetTeachers() {
//     return this.http.get(this.global.GetTeachers);
//   }
 
//  DeleteTeacher(teacherid)
//  {
//   return this.http.post(this.global.DeleteTeacher, teacherid);
   
//  }

}
