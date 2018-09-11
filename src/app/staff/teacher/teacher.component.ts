import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../Common/Teacher';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { AdminService } from '../../admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  public teacherform: FormGroup;
  teacher: Teacher = new Teacher();
  displayteacher: boolean;
  AddTeacherButton:boolean=true;
  response: any;
  teacherlist = [];
  constructor(private fb: FormBuilder, private Valid: Validation, private service: StaffService, private toastr: ToastrService) { }

  ngOnInit() {

    this.teacherform = this.fb.group({
      FirstName: this.Valid.signupform.FirstName,
      LastName: this.Valid.signupform.LastName,
      Gender: this.Valid.signupform.Gender,
      StaffType: this.Valid.signupform.Gender,
      ContactNumber: this.Valid.signupform.MobileNumber,
      DateOfJoining: this.Valid.signupform.DateOfBirth,
      Qualification: this.Valid.signupform.Required,
      Experience: this.Valid.signupform.Experience,
      Salary:this.Valid.signupform.Salary,
      Email:this.Valid.signupform.Email,
      Password:this.Valid.signupform.LastName,
      Designation:this.Valid.signupform.Section

    });
    this.GetTeachers();
  }

  RegisterTeacher() {

    if (this.teacher.TeacherID == null) {
debugger;
      this.service.RegisterTeacher(this.teacher).subscribe(data => {
        debugger;
        this.response = data;
        this.GetTeachers();
        this.toastr.success('Teacher', 'Sucessfully Registered!');
      }, error => {

        // this.toastr.error('Teacher', 'Failed Registered!');
      }
      )
    }
    else {
      this.service.UpdateTeacher(this.teacher).subscribe(data => {
        this.response = data;
        this.GetTeachers();
        this.toastr.success('Teacher', 'Sucessfully Updated!');
      }, error => {

        // this.toastr.error('Teacher', 'Failed Update!');
      }
      )
    }
  }
  GetTeachers() {

    this.service.GetTeachers().subscribe((data: any[]) => {
      debugger;
      this.teacherlist = data;

    }, error => {

    }
    );
  }

  DeleteTeacher(id) {
    this.service.DeleteTeacher(id).subscribe(data => {
      this.response = data;
      this.GetTeachers();
      this.toastr.success('Teacher', 'Sucessfully Deleted!');
    }, error => {

      // this.toastr.error('Teacher', 'Failed Deleted!');
    }
    )

  }
  EditTeacher(teachersdata) {
    this.teacher = teachersdata;
  }
  CreateTeacher() {
    this.displayteacher = true;
    this.AddTeacherButton=false;
  }
  Cancel() {
    this.displayteacher = false;
    this.AddTeacherButton=true;
    
  }

}


