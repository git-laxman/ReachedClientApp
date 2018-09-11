import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { TimetableService } from '../timetable.service';
import { ToastrService } from 'ngx-toastr';
import { AssignSubjectTeachertoClass } from '../../Common/AssignSubjectTeachertoClass';

@Component({
  selector: 'app-assign-to-teacher',
  templateUrl: './assign-to-teacher.component.html',
  styleUrls: ['./assign-to-teacher.component.scss']
})
export class AssignToTeacherComponent implements OnInit {

  public assignteacherform: FormGroup;
  //assignteacher: AssignSubjectTeachertoClass = new AssignSubjectTeachertoClass();
  assignteacher: AssignSubjectTeachertoClass = {
    AssignSubjectTeachertoClassID: null,
    WorkingDays: null,
    Periods: null,
    Friday: null,
    Monday: null,
    Saturday: null,
    Tuesday: null,
    ThursDay: null,
    Wednesday: null,
    Teacher: null,
    Subject: null,
    Class: null,
    Section: null,
  };
  
  response: any;
  CreateSCTButton:boolean=true;
  displayassignsubjectteacher: boolean;
  assignsubjectteacherlist = [];
  deleteddata: any;
  constructor(private fb: FormBuilder, private Valid: Validation, private service: TimetableService, private toastr: ToastrService) { }

  ngOnInit() {
    this.assignteacherform = this.fb.group({

      WorkingDays: this.Valid.signupform.OneNumber,
      Periods: this.Valid.signupform.OneNumber,
      // WeekDay: this.Valid.signupform.Required,
      Teacher: this.Valid.signupform.Required,
      Subject: this.Valid.signupform.Required,
      Class: this.Valid.signupform.Required,
      Section: this.Valid.signupform.Required,
      Friday: this.Valid.signupform.Day,
      Monday:this.Valid.signupform.Day,
      Saturday: this.Valid.signupform.Day,
      Tuesday: this.Valid.signupform.Day,
      Thursday: this.Valid.signupform.Day,
      Wednesday:this.Valid.signupform.Day
    });
    this.GetAllAssignSubjectTeacher();
  }

  AssignSubjectTeachertoClass() {
    if (this.assignteacher.AssignSubjectTeachertoClassID == null) {
     
      this.service.AssignSubjectTeachertoClass(this.assignteacher).subscribe(data => {
        this.response = data;
        this.GetAllAssignSubjectTeacher();

        this.toastr.success('Teacher', 'Sucessfully Registered!');
      }, error => {

        // this.toastr.error('Teacher', 'Failed Registered!');
      }
      )
    }
    else {
     
      this.service.UpdateAssignSubjectTeachertoClass(this.assignteacher).subscribe(data => {
        this.deleteddata = data;
        this.GetAllAssignSubjectTeacher();

        this.toastr.success('Teacher', 'Sucessfully Updated!');
      }, error => {

        // this.toastr.error('Teacher', 'Failed Update!');
      }
      )
    }
  }

  GetAllAssignSubjectTeacher() {
   
    this.service.GetTeachers().subscribe((data: any[]) => {
      this.assignsubjectteacherlist = data;

    }, error => {

    }
    );
  }
  DeleteGetAllAssignSubjectTeacher(id) {
    this.service.DeleteAssignSubjectTeachertoClass(id).subscribe(data => {
      this.response = data;
      this.GetAllAssignSubjectTeacher();
      this.toastr.success('Teacher', 'Sucessfully Deleted!');
    }, error => {

      // this.toastr.error('Teacher', 'Failed Deleted!');
    }
    )
  }
  CreateAssignSubjectTeachertoClass() {
    this.displayassignsubjectteacher = true;
    this.CreateSCTButton=false;
  }
  Cancel() {
    this.displayassignsubjectteacher = false;
    this.CreateSCTButton=true;
    

  }

}
