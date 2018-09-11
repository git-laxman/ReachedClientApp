import { Component, OnInit, TemplateRef } from '@angular/core';
import { UnhandledAlertError } from 'selenium-webdriver';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { isNullOrUndefined } from 'util';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xls';
import { Marks } from '../../Common/marks';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { ExamService } from '../exam.service';
// ngx bootstrap
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss'],
  providers: [BsModalService, ExamService]
})
export class MarksComponent implements OnInit {

  modalRef: BsModalRef;
  MarksDataList = [];
  file: File;
  arrayBuffer: any;
  dispalyMarksform = true;
  jsonStr: any[];
  index1 = -1;
  marksobj: Marks = new Marks();
  delindex: any;
  public response: any;
  public signupform: FormGroup;

  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: ExamService, private modalService: BsModalService) { }

  ngOnInit() {
    this.signupform = this.fb.group({
      ExamName: this.Valid.signupform.Required,
      ClassName: this.Valid.signupform.Required,
      SectionName: this.Valid.signupform.Required,
      StudentName: this.Valid.signupform.Required,
      SubjectName1: this.Valid.signupform.Required,
      SubjectName2: this.Valid.signupform.Required,
      SubjectName3: this.Valid.signupform.Required,
      SubjectName4: this.Valid.signupform.Required,
      SubjectName5: this.Valid.signupform.Required,
      SubjectName6: this.Valid.signupform.Required,
      SubjectName7: this.Valid.signupform.Required,
      SubjectName8: this.Valid.signupform.Required,
      SubjectName9: this.Valid.signupform.Required,
      SubjectName10: this.Valid.signupform.Required,
      SubjectName11: this.Valid.signupform.Required,
      SubjectName12: this.Valid.signupform.Required,
      MarksScored: this.Valid.signupform.Required

    });
  }
  // File Uploading - Excel and CSV
  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    debugger;
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
        this.jsonStr.forEach((MarksData, index) => {
          if (IsValid) {
            if (!isNullOrUndefined(MarksData['ExamName']) &&
              !isNullOrUndefined(MarksData['ClassName']) &&
              !isNullOrUndefined(MarksData['SectionName']) &&
              !isNullOrUndefined(MarksData['StudentName']) &&
              !isNullOrUndefined(MarksData['SubjectName1']) &&
              !isNullOrUndefined(MarksData['SubjectName2']) &&
              !isNullOrUndefined(MarksData['SubjectName3']) &&
              !isNullOrUndefined(MarksData['SubjectName4']) &&
              !isNullOrUndefined(MarksData['SubjectName5']) &&
              !isNullOrUndefined(MarksData['SubjectName6']) &&
              !isNullOrUndefined(MarksData['SubjectName7']) &&
              !isNullOrUndefined(MarksData['SubjectName8']) &&
              !isNullOrUndefined(MarksData['SubjectName9']) &&
              !isNullOrUndefined(MarksData['SubjectName10']) &&
              !isNullOrUndefined(MarksData['SubjectName11']) &&
              !isNullOrUndefined(MarksData['SubjectName12']) &&
              !isNullOrUndefined(MarksData['MarksScored'])
            ) {
              IsValid = true;
            } else {
              IsValid = false;
            }
          }
        });

        this.jsonStr.forEach((MarksData, index) => {
          if (IsValid) {
            this.index1 = this.index1 + 1;
            this.MarksDataList[this.index1] = new Marks();
            this.MarksDataList[this.index1].ExamName = MarksData['ExamName'];
            this.MarksDataList[this.index1].ClassName = MarksData['ClassName'];
            this.MarksDataList[this.index1].SectionName = MarksData['SectionName'];
            this.MarksDataList[this.index1].StudentName = MarksData['StudentName'];
            this.MarksDataList[this.index1].SubjectName1 = MarksData['SubjectName1'];
            this.MarksDataList[this.index1].SubjectName2 = MarksData['SubjectName2'];
            this.MarksDataList[this.index1].SubjectName3 = MarksData['SubjectName3'];
            this.MarksDataList[this.index1].SubjectName4 = MarksData['SubjectName4'];
            this.MarksDataList[this.index1].SubjectName5 = MarksData['SubjectName5'];
            this.MarksDataList[this.index1].SubjectName6 = MarksData['SubjectName6'];
            this.MarksDataList[this.index1].SubjectName7 = MarksData['SubjectName7'];
            this.MarksDataList[this.index1].SubjectName8 = MarksData['SubjectName8'];
            this.MarksDataList[this.index1].SubjectName9 = MarksData['SubjectName9'];
            this.MarksDataList[this.index1].SubjectName10 = MarksData['SubjectName10'];
            this.MarksDataList[this.index1].SubjectName11 = MarksData['SubjectName11'];
            this.MarksDataList[this.index1].SubjectName12 = MarksData['SubjectName12'];
            this.MarksDataList[this.index1].MarksScored = MarksData['MarksScored'];            

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

  editMarks(value) {
    this.dispalyMarksform = false;
    this.marksobj = value;
  }

  deleteMarks(value) {
    alert('Marks deleted');
  }

  // Mass update - Saving the records into the Database - API call
  OnSubmitBtnClick() {
    if (this.MarksDataList.length === 0) {
      // // this.toastr.error("No invoice details to save.", 'Error');
      return;
    }

    const MarksFilterList = this.MarksDataList.filter(x => x.RowUpdated === true);

    if (MarksFilterList.length === 0) {
      // this.toastr.info("No changes did to save the records.", 'Alert');
      return;
    }

    // this.note.loadingSpinnerByMessage(true, "Saving records...");
    // this.IsBtnSubmit = true;
    this.service.InsertMarksRecords(MarksFilterList).subscribe(data => {
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
  OnDeleteClick(stuData: Marks, index, popname: TemplateRef<any>) {
    if (!isNullOrUndefined(stuData.ExamName)) {
      // this.delInvoiceNumber = invData.InvoiceNumber;
      this.delindex = index;
      this.modalRef = this.modalService.show(popname, { backdrop: 'static', keyboard: false });
      return;
    }
    this.DeleteRow(index);
  }

  // Confirmation Popup for Deletion
  ConfirmedTodeletemarkDetails(invoiceNumber, index) {
    const delMarksData = new Marks();
    delMarksData.ExamName = invoiceNumber;
    // Service call to delete the record
    this.service.DeleteMarksRecord(delMarksData).subscribe(data => {
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
    const MarksList = this.MarksDataList;
    MarksList.splice(index, 1);
    this.MarksDataList = new Array<Marks>();
    this.MarksDataList = MarksList;

  }

}
