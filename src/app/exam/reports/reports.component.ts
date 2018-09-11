import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { ExamReports } from '../../Common/examreports';
import { ExamService } from '../exam.service';
import { ToastrService } from 'ngx-toastr';
import { Class } from '../../Common/Class';
import { dropDown } from '../../Common/dropdown';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  examreportobj: ExamReports = new ExamReports();
  public response: any;
  public Reportsform: FormGroup;
  classdd: dropDown[] = [];
  sectiondd: dropDown[] = [];
  DisplayReportsform: boolean;
  ExamReportsList = [];
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: ExamService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.Reportsform = this.fb.group({
      ClassName: this.Valid.signupform.ClassName,
      SectionName: this.Valid.signupform.SectionName,
    });
    this.RetrieveClass();
    this.retrievesectiondd();
  }

  retrievesectiondd() {
    this.service.RetrieveSectionDetails().subscribe((data: any[]) => {
      this.sectiondd = data;
      this.toastr.success('Section', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Section', 'Retrieved Failed!');
    }
    );
  }

  RetrieveClass() {
    this.service.RetrieveClassDetails().subscribe((data: any[]) => {
      this.classdd = data;
      this.toastr.success('Class', 'Retrieved Sucessfully!');
    }, error => {

      // this.toastr.error('Class', 'Retrieved Failed!');
    }
    );
  }

  // SaveExamReports() {
  //   if (this.examreportobj.ExamReportsID == null) {
  //     this.service.insertscheduleexamdetails(this.examreportobj).subscribe(data => {
  //       this.response = data;
  //       this.toastr.success('Schedule Exam', 'Sucessfully saved!');
  //       this.RetieveExamReportsList();
  //     }, error => {

  //       // this.toastr.error('Schedule Exam', 'Failed saved!');
  //     }
  //     );
  //   } else {
  //     this.service.updatescheduleexamdetails(this.examreportobj).subscribe(data => {
  //       this.response = data;
  //       this.toastr.success('Schedule Exam', 'Sucessfully saved!');
  //       this.RetieveExamReportsList();
  //     }, error => {

  //       // this.toastr.error('Schedule Exam', 'Failed saved!');
  //     }
  //     );
  //   }

  // }

  // Deletescheduleexam() {
  //   this.service.RemoveScheduleExamdetails(this.examreportobj).subscribe(data => {
  //     this.response = data;
  //     this.toastr.success('Schedule Exam', 'Deleted Successfully!');
  //   }, error => {

  //     // this.toastr.error('Schedule Exam', 'Deleted Failed!');
  //   }
  //   );
  // }

  RetieveExamReportsList(className) {
    this.service.getExamReportsListdetails(className).subscribe((data: any) => {
      this.ExamReportsList = data;
    }, error => {
    }
    );
  }

  onchangestudentlist(className) {
    this.RetieveExamReportsList(className);
  }

  CreateScheduleExam() {
    this.DisplayReportsform = true;
  }

  Cancel() {
    this.DisplayReportsform = false;
  }

  EditExamReport(data) {
    this.examreportobj = data;
  }

}
