import { Component, OnInit, TemplateRef } from '@angular/core';
import { UnhandledAlertError } from 'selenium-webdriver';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { isNullOrUndefined } from 'util';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xls';
import { Student } from '../../Common/Student';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { StudentService } from '../student.service';
// ngx bootstrap
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-multiple-students',
  templateUrl: './multiple-students.component.html',
  styleUrls: ['./multiple-students.component.scss'],
  providers: [BsModalService]
})
export class MultipleStudentsComponent implements OnInit {
  modalRef: BsModalRef;
  StudentDataList = [];
  file: File;
  arrayBuffer: any;
  dispalystudentform = true;
  jsonStr: any[];
  index1 = -1;
  student: Student = new Student();
  delindex: any;
  public response: any;
  public signupform: FormGroup;

  constructor(private fb: FormBuilder, private Valid: Validation,
    private studentservice: StudentService, private modalService: BsModalService) { }

  ngOnInit() {
    this.signupform = this.fb.group({
      FirstName: this.Valid.signupform.FirstName,
      LastName: this.Valid.signupform.LastName,
      Gender: this.Valid.signupform.Gender,
      AadharNumber: this.Valid.signupform.AadharNumber,
      ParentName: this.Valid.signupform.ParentName,
      ParentNumber: this.Valid.signupform.ParentNumber,
      DateOfBirth: this.Valid.signupform.DateOfBirth,
      Address: this.Valid.signupform.Address,
      RollNumber: this.Valid.signupform.RollNumber,
      BusRouteNumber: this.Valid.signupform.BusRouteNumber,
      BusRouteName: this.Valid.signupform.BusRouteName,
      Class: this.Valid.signupform.Class,
      Section: this.Valid.signupform.Section,
      Course:this.Valid.signupform.Section
    });
  }
  // File Uploading - Excel and CSV
  incomingfile(event) {
    this.file = event.target.files[0];
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
        this.jsonStr.forEach((studentData, index) => {
          if (IsValid) {
            if (!isNullOrUndefined(studentData['FirstName']) &&
              !isNullOrUndefined(studentData['LastName']) &&
              !isNullOrUndefined(studentData['DateOfBirth']) &&
              !isNullOrUndefined(studentData['AadharNumber']) &&
              !isNullOrUndefined(studentData['ParentName']) &&
              !isNullOrUndefined(studentData['ParentNumber']) &&
              !isNullOrUndefined(studentData['Address']) &&
              !isNullOrUndefined(studentData['RollNumber']) &&
              !isNullOrUndefined(studentData['BusRouteNumber']) &&
              !isNullOrUndefined(studentData['BusRouteName']) &&
              !isNullOrUndefined(studentData['Gender']) &&
              !isNullOrUndefined(studentData['Class']) &&
              !isNullOrUndefined(studentData['Section'])
            ) {
              IsValid = true;
            } else {
              IsValid = false;
            }
          }
        });

        this.jsonStr.forEach((studentData, index) => {
          if (IsValid) {
            this.index1 = this.index1 + 1;
            this.StudentDataList[this.index1] = new Student();
            this.StudentDataList[this.index1].FirstName = studentData['FirstName'];
            this.StudentDataList[this.index1].LastName = studentData['LastName'];
            this.StudentDataList[this.index1].DateOfBirth = studentData['DateOfBirth'];
            this.StudentDataList[this.index1].AadharNumber = studentData['AadharNumber'];
            this.StudentDataList[this.index1].ParentName = studentData['ParentName'];
            this.StudentDataList[this.index1].ParentNumber = studentData['ParentNumber'];
            this.StudentDataList[this.index1].Address = studentData['Address'];
            this.StudentDataList[this.index1].RollNumber = studentData['RollNumber'];
            this.StudentDataList[this.index1].BusRouteNumber = studentData['BusRouteNumber'];
            this.StudentDataList[this.index1].BusRouteName = studentData['BusRouteName'];
            this.StudentDataList[this.index1].Gender = studentData['Gender'];
            this.StudentDataList[this.index1].Class = studentData['Class'];
            this.StudentDataList[this.index1].Section = studentData['Section'];
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

  editstudent(value) {
    this.dispalystudentform = false;
    this.student = value;
  }

  deletestudent(value) {
    alert('student deleted');
  }

  // Mass update - Saving the records into the Database - API call
  OnSubmitBtnClick() {
    if (this.StudentDataList.length == 0) {
      // // this.toastr.error("No invoice details to save.", 'Error');
      return;
    }

    const studentFilterList = this.StudentDataList.filter(x => x.RowUpdated == true);

    if (studentFilterList.length == 0) {
      // this.toastr.info("No changes did to save the records.", 'Alert');
      return;
    }

    // this.note.loadingSpinnerByMessage(true, "Saving records...");
    // this.IsBtnSubmit = true;
    this.studentservice.RegisterMultipleStudents(studentFilterList).subscribe(data => {
      // if (data.Status == "PASS") {
      // this.OnClearClick();
      // this.toastr.success('Invoice Data Details Saved Successfully.', 'Success');
      // this.note.loadingSpinnerByMessage(false, "Saving records...");
      // }
      // else {
      // // this.toastr.error(data.Message, 'Error');
      // this.note.loadingSpinnerByMessage(false, "Saving records...");
      // }
    });
  }

  // Deleting Row from DB and Grid
  OnDeleteClick(stuData: Student, index, popname: TemplateRef<any>) {
    if (!isNullOrUndefined(stuData.FirstName)) {
      // this.delInvoiceNumber = invData.InvoiceNumber;
      this.delindex = index;
      this.modalRef = this.modalService.show(popname, { backdrop: 'static', keyboard: false });
      return;
    }
    this.DeleteRow(index);
  }

  // Confirmation Popup for Deletion
  ConfirmedToDeleteStudentDetails(invoiceNumber, index) {
    let delstudentData = new Student();
    delstudentData.SectionName = invoiceNumber;
    // Service call to delete the record
    this.studentservice.DeleteStudentRecord(delstudentData).subscribe(data => {
      // if (data.Status == "PASS") {
      //   this.DeleteRow(index);
      //   this.toastr.success("Record deleted successfully", "SUCCESS");
      // }
      // else {
      //   // this.toastr.error("Failed  to delete the record from DB.", "FAIL");
      // }
    });
    this.modalRef.hide();
  }

  // Deleted the record from the Grid
  DeleteRow(index) {
    const studentList = this.StudentDataList;
    studentList.splice(index, 1);
    this.StudentDataList = new Array<Student>();
    this.StudentDataList = studentList;

  }
}
