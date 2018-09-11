import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { Course } from '../../Common/Course';
import { FeeService } from '../fee.service';
import { ToastrService } from 'ngx-toastr';
import { Class } from '../../Common/Class';
import { dropDown } from '../../Common/dropdown';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  course: Course = new Course();
  public response: any;
  public courseform: FormGroup;
  classdd: dropDown[] = [];
  addcourselist = [];
  DisplayAddCourseForm: boolean;
  constructor(private fb: FormBuilder, private Valid: Validation,
    private courseservice: FeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.courseform = this.fb.group({
      CourseName: this.Valid.signupform.CourseName,
      ClassName: this.Valid.signupform.ClassName,
      
    });
    this.RetrieveClass();
  }

  // createcourse() {
  //   this.courseservice.insertcoursedetails(this.course).subscribe(data => {
  //     this.response = data;
  //     this.toastr.success('Course', 'Sucessfully Registered!');
  //   }, error => {
  //     // this.toastr.error('Course', 'Failed Registered!');
  //   }
  //   );
  // }

  createcourse() {
    if (this.course.CourseID == null) {
      debugger;
      this.courseservice.insertcoursedetails(this.course).subscribe(data => {
        debugger;
        this.response = data;
        this.RetieveAddCourseList();
        this.DisplayAddCourseForm = false;
        this.toastr.success('Course', "Successfully Registered");
      }, error => {
        // this.toastr.error('Course', 'Failed Registered!');
      }
      );
    } else {
      this.courseservice.updatecoursedetails(this.course).subscribe(data => {
        this.response = data;
        this.RetieveAddCourseList();
        this.DisplayAddCourseForm = false;
        this.toastr.success('Course', 'Sucessfully Registered!');
      }, error => {
        // this.toastr.error('Course', 'Failed Registered!');
      }
      );
    }
  }

  RetrieveClass() {
    this.courseservice.RetrieveClassDetails().subscribe((data: any[]) => {
      this.classdd = data;
      this.toastr.success('Course', 'Sucessfully Registered!');
    }, error => {
      // this.toastr.error('Course', 'Failed Registered!');
    }
    );
  }

  CreateAddCourse() {
    this.DisplayAddCourseForm = true;
  }

  Cancel() {
    this.DisplayAddCourseForm = false;
  }

  EditAddCourse(data) {
    this.course = data;
  }

  deletefeeamount() {
    this.courseservice.removeAddcoursedetails(this.course).subscribe(data => {
      this.response = data;
      this.toastr.success('Add Course', 'Deleted Successfully!');
    }, error => {

      // this.toastr.error('Add Course', 'Deleted Failed!');
    }
    );
  }

  RetieveAddCourseList() {
    this.courseservice.getAddcourselistdetails().subscribe((data: any[]) => {
      this.addcourselist = data;
      this.toastr.success('Add Course', 'Deleted Successfully!');
    }, error => {
      // this.toastr.error('Add Course', 'Deleted Failed!');
    }
    );
  }

  // RetieveAddCourse() {
  //   this.courseservice.getaddcoursetdetails(this.course.CourseID).subscribe(data => {
  //     this.course = data;
  //     // this.toastr.success('Add Course', 'Deleted Successfully!');
  //   }, error => {
  //     // // this.toastr.error('Add Course', 'Deleted Failed!');
  //   }
  //   );
  // }

}
