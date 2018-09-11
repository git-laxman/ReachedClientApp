import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MontlyAttendance } from '../../Common/Attendance';
import { Validation } from '../../Shared/Validator';
import { AttendanceReportsService } from '../attendance-reports.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-attendance-reports',
  templateUrl: './view-attendance-reports.component.html',
  styleUrls: ['./view-attendance-reports.component.scss']
})
export class ViewAttendanceReportsComponent implements OnInit {
  public response: any;
  DataList = [];
  public signupform: FormGroup;
  public attendanceform: FormGroup;
  attendance: MontlyAttendance = new MontlyAttendance();
  singledatedisplay: boolean;
  multydatedisplay: boolean;
  
  constructor(private fb: FormBuilder, private Valid: Validation, private service: AttendanceReportsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.attendanceform = this.fb.group({
      Class: this.Valid.signupform.Class,
      Section: this.Valid.signupform.Section,
      Date: this.Valid.signupform.Required,
      AttendanceType:this.Valid.signupform.Gender,
      AttendanceFrom:this.Valid.signupform.FromToNumber,
      AttendanceTo:this.Valid.signupform.FromToNumber
    });
  }


  setradio(e: string) {
    if (e === 'single') {
      this.attendance.AttendanceFrom = null;
      this.attendance.AttendanceTo = null;
      this.singledatedisplay = true;
      this.multydatedisplay = false;

    } else {
      this.multydatedisplay = true;
      this.singledatedisplay = false;
    }
  }
  GenarateAttendanceReports()
  {
    alert("clicked");
   
    this.service.GenarateMonthAttendanceReport(this.attendance).subscribe((data: any[])=> {
      this.DataList = data;
    }, error =>
     {
      // this.toastr.error('No Record Found', this.attendance.Class);
    }
    )
  }

 
}
