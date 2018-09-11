import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { AttendanceReportsService } from '../attendance-reports.service';
import { ToastrService } from 'ngx-toastr';
import { Attendance } from '../../Common/Attendance';

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.scss']
})
export class DailyReportsComponent implements OnInit {

  public attendanceform: FormGroup;
  attendance: Attendance = new Attendance();
  response: any;
  constructor(private fb: FormBuilder, private Valid: Validation, private service: AttendanceReportsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.attendanceform = this.fb.group({
      Class: this.Valid.signupform.Class,
      Section: this.Valid.signupform.Section,
      AbsentRollNumbers: this.Valid.signupform.Required,
      Date: this.Valid.signupform.Required,
    });
  }
  GenarateAttendanceReport() {

   
    this.service.SaveDayAttendanceReport(this.attendance).subscribe(data => {
      this.response = data;
      this.toastr.success('Attendance', 'Sucessfully Registered!');
    }, error => {

      // this.toastr.error('Attendance', 'Failed Registered!');
    }
    )
  }

}
