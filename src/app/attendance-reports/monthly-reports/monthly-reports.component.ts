import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Attendance, MontlyAttendance } from '../../Common/Attendance';
import { Validation } from '../../Shared/Validator';
import { AttendanceReportsService } from '../attendance-reports.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-monthly-reports',
  templateUrl: './monthly-reports.component.html',
  styleUrls: ['./monthly-reports.component.scss']
})
export class MonthlyReportsComponent implements OnInit {
  modalRef: BsModalRef;
  DataList = [];
  file: File;
  arrayBuffer: any;
  dispalystudentform = true;
  jsonStr: any[];
  index1 = -1;
  delindex: any;
  public response: any;
  public signupform: FormGroup;
  public attendanceform: FormGroup;
  attendance: MontlyAttendance = new MontlyAttendance();

  constructor(private fb: FormBuilder, private Valid: Validation, private service: AttendanceReportsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.attendanceform = this.fb.group({
      Class: this.Valid.signupform.Class,
      Section: this.Valid.signupform.Section,
      Date: this.Valid.signupform.Required,
    });
  }
  GenarateAttendanceReport() {

   
    this.service.SaveMonthAttendanceReport(this.attendance).subscribe(data => {
      this.response = data;
      this.toastr.success('Attendance', 'Sucessfully Registered!');
    }, error => {

      // this.toastr.error('Attendance', 'Failed Registered!');
    }
    )
  }

  Upload() {
    try {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        const data = new Uint8Array(this.arrayBuffer);
        const arr = new Array();
        for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
        const bstr = arr.join('');
        const workbook = XLSX.read(bstr, { raw: true, type: 'binary', cellDates: true });
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        this.jsonStr = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        let IsValid = true;
        this.jsonStr.forEach((Data, index) => {
          if (IsValid) {
            if (!isNullOrUndefined(Data['FirstName']) && !isNullOrUndefined(Data['LastName']) && !isNullOrUndefined(Data['RollNumber'])
            ) {
              IsValid = true;
            } else {
              IsValid = false;
            }
          }
        });

        this.jsonStr.forEach((Data, index) => {
          if (IsValid) {
            this.index1 = this.index1 + 1;
            this.DataList[this.index1] = new MontlyAttendance();
            this.DataList[this.index1].FirstName = Data['FirstName'];
            this.DataList[this.index1].LastName = Data['LastName'];
            this.DataList[this.index1].RollNumber = Data['RollNumber'];
          } else {
            if (index === 0) {
              // this.toastr.info("please upload correct file.", "Alert");
            }
          }
        });
      };
      fileReader.readAsArrayBuffer(this.file);
    } catch (error) {
    }
  }
  incomingfile(event) {
    this.file = event.target.files[0];
  }

}
