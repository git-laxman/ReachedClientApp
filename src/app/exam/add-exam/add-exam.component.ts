import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { AddExam } from '../../Common/addexam';
import { ExamService } from '../exam.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dropDown } from '../../Common/dropdown';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss'],
})
export class AddExamComponent implements OnInit {

  exam: AddExam = new AddExam();
  public response: any;
  public Examlist = [];
  classdd: dropDown[] = [];
  public examform: FormGroup;
  public editexamdata: any;
  DisplayExamForm: boolean;
  gradepooldd: dropDown[] = [];

  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: ExamService, private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.examform = this.fb.group({
      ExamName: this.Valid.signupform.Required,
      ExamFromDate: this.Valid.signupform.Required,
      ExamToDate: this.Valid.signupform.Required,
      ClassName: this.Valid.signupform.Required,
      GradePool: this.Valid.signupform.Required
    });
    this.GetExamlist();
    this.RetrieveClass();
    this.RetrieveGradePool();
  }

  CreateExam() {
    this.DisplayExamForm = true;
  }

  GetExamlist() {
    this.service.getexamlist().subscribe((data: any[]) => {
      this.Examlist = data;
    }, error => {

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

  RetrieveGradePool() {
    this.service.getGradelistdetails().subscribe((data: any[]) => {
      this.gradepooldd = data;
      this.toastr.success('Grade Pool', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Grade Pool', 'Retrieved Failed!');
    }
    );
  }

  SaveExam() {
    if (this.exam.ExamID == null) {
      this.service.insertexam(this.exam).subscribe(data => {
        this.response = data;
        this.GetExamlist();
        this.DisplayExamForm = false;
        this.toastr.success('ExamRecord', 'Sucessfully Registered!');
      }, error => {
        // this.toastr.error('ExamRecord', 'Failed Registered!');
      }
      );
    } else {
      this.service.updateExam(this.exam).subscribe(data => {
        this.response = data;
        this.GetExamlist();
        this.DisplayExamForm = false;
        this.toastr.success('ExamRecord', 'Sucessfully Updated!');
      }, error => {
        // this.toastr.error('ExamRecord', 'Failed Updated!');
      }
      );
    }

  }
  Cancel() {
    this.DisplayExamForm = false;
  }


  EditExamRecord(data) {
    this.exam = data;
  }

  GetExamRecord(examid) {
    this.service.GetExamRecord(examid).subscribe((data: any) => {
      this.editexamdata = data;
      this.GetExamlist();
    }, error => {
    }
    );
  }

  DeleteExam(examId) {
    this.service.DeleteExam(examId).subscribe(data => {
      this.GetExamlist();
    }, error => {
    }
    );
  }

}
