import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { ScheduleExam } from '../../Common/scheduleexam';
import { ExamService } from '../exam.service';
import { ToastrService } from 'ngx-toastr';
import { Class } from '../../Common/Class';
import { dropDown } from '../../Common/dropdown';

@Component({
  selector: 'app-schedule-exam',
  templateUrl: './schedule-exam.component.html',
  styleUrls: ['./schedule-exam.component.scss']
})
export class ScheduleExamComponent implements OnInit {

  scheduleExamobj: ScheduleExam = new ScheduleExam();
  public response: any;
  public scheduleexamform: FormGroup;
  classdd: dropDown[] = [];
  Displayscheduleexamlistform: boolean;
  scheduleexamlist = [];
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: ExamService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.scheduleexamform = this.fb.group({
      ClassName: this.Valid.signupform.ClassName,
      SubjectName: this.Valid.signupform.Required,
      ExamDate: this.Valid.signupform.Required,
      ExamStartTime: this.Valid.signupform.Required,
      ExamEndTime: this.Valid.signupform.Required,

    });
    this.RetrieveClass();
    this.RetieveScheduleExamList();
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

  saveScheduleExam() {
    if (this.scheduleExamobj.ScheduleExamID == null) {
      this.service.insertscheduleexamdetails(this.scheduleExamobj).subscribe(data => {
        this.response = data;
        this.toastr.success('Schedule Exam', 'Sucessfully saved!');
        this.RetieveScheduleExamList();
      }, error => {

        // this.toastr.error('Schedule Exam', 'Failed saved!');
      }
      );
    } else {
      this.service.updatescheduleexamdetails(this.scheduleExamobj).subscribe(data => {
        this.response = data;
        this.toastr.success('Schedule Exam', 'Sucessfully saved!');
        this.RetieveScheduleExamList();
      }, error => {

        // this.toastr.error('Schedule Exam', 'Failed saved!');
      }
      );
    }

  }

  Deletescheduleexam() {
    this.service.RemoveScheduleExamdetails(this.scheduleExamobj).subscribe(data => {
      this.response = data;
      this.toastr.success('Schedule Exam', 'Deleted Successfully!');
    }, error => {

      // this.toastr.error('Schedule Exam', 'Deleted Failed!');
    }
    );
  }

  RetieveScheduleExamList() {
    this.service.getScheduleExamlistdetails().subscribe((data: any[]) => {
      this.scheduleexamlist = data;
    }, error => {
    }
    );
  }

  // onChangeClassName(className) {
  //   this.service.getsubjectByclass(className).subscribe((data: any[]) => {
  //     this.scheduleexamlist = data;
  //   }, error => {
  //   }
  //   );
  // }

  CreateScheduleExam() {
    this.Displayscheduleexamlistform = true;
  }

  Cancel() {
    this.Displayscheduleexamlistform = false;
  }

  Editscheduleexam(data) {
    this.scheduleExamobj = data;
  }

}
