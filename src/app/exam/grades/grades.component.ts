import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { Grade } from '../../Common/grade';
import { ExamService } from '../exam.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

  gradeobj: Grade = new Grade();
  // newaddgrade: Grade = new Grade();
  public response: any;
  public gradeform: FormGroup;
  DisplayAddGradeForm: boolean;
  gradelist = [];
  graderecord;
  fieldArrayName = [];

  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: ExamService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.gradeform = this.fb.group({
      GradePool: this.Valid.signupform.GradePool,
      maxmarks: this.Valid.signupform.maxmarks,
      // marksrangefrom: this.Valid.signupform.marksrangefrom,
      // marksrangeto: this.Valid.signupform.marksrangeto,
      // grade: this.Valid.signupform.grade,
      // remarks: this.Valid.signupform.remarks,
      // passorfail: this.Valid.signupform.remarks,
    });
  }

  deleterow(index) {
    this.fieldArrayName.splice(index, 1);
  }
  addrow() {
    this.fieldArrayName.push(this.gradeobj);
    this.gradeobj = new Grade();
  }

  savegrade() {
    if (this.gradeobj.gradeID == null) {
      this.service.insertgradedetails(this.gradeobj).subscribe(data => {
        this.response = data;
        this.toastr.success('grade', 'Sucessfully saved!');
        this.RetieveGradeList();
      }, error => {

        // this.toastr.error('grade', 'Failed saved!');
      }
      );
    } else {
      this.service.updategradedetails(this.gradeobj).subscribe(data => {
        this.response = data;
        this.toastr.success('Grade', 'Updated Sucessfully!');
        this.RetieveGradeList();
      }, error => {

        // this.toastr.error('Grade', 'Updated Failed!');
      }
      );
    }

  }

  DeleteGrade(gradeid) {
    this.service.removegrade(gradeid).subscribe(data => {
      this.response = data;
      this.toastr.success('Grade', 'Deleted saved!');
    }, error => {

      // this.toastr.error('Grade', 'Deleted saved!');
    }
    );
  }

  RetieveGradeList() {
    this.service.getGradelistdetails().subscribe((data: any[]) => {
      this.gradelist = data;
    }, error => {
    }
    );
  }

  RetieveGradeRecord(GradeId) {
    this.DisplayAddGradeForm = true;
    this.service.GetGradeRecord(GradeId).subscribe((data: any) => {
      this.graderecord = data;
    }, error => {
    }
    );
  }
  CreateAddGrade() {
    this.DisplayAddGradeForm = true;
  }

  Cancel() {
    this.DisplayAddGradeForm = false;
  }
}
