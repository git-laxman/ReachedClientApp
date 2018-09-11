import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { Student } from '../../Common/Student';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommondataService } from '../../shared/commondata.service';
import { Course } from '../../Common/Course';
@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.scss']
})
export class SingleStudentComponent implements OnInit {
  // student: Student = {
  //   StudentID: null,
  //   Address: '',
  //   AadharNumber: null,
  //   AdmissionNumber: null,
  //   StudentCode:null,
  //   BusRouteName: null,
  //   Class: null,
  //   ParentName: null,
  //   LastName: '',
  //   FirstName: null,
  //   Section: null,
  //   DateOfBirth: null,
  //   ParentNumber: null,
  //   Gender: null,
  //   BusRouteNumber: null,
  //   RollNumber: null,
  //   Course:null,
  //   ParentEmail:null,
  //   CreatedOn:null,
  //   CreatedBy:null,
  //   ModifiedOn:null,
  //   ModifiedBy:null,
  //   Status:null,
  //   StudentEmail:null,
  //   Password:null,
  //   ClassName:null,
  //   SectionName:null
  // };

student:Student= new Student();
  
  public response: any;
  public studentlist = [];
  public signupform: FormGroup;
  public editstudentdata: any;
  DisplayStudentForm: boolean;
  CreateStudentButton:boolean=true;
  classeslist = [];
  sectionlist = [];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};


  // student:Student= new Student();
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: StudentService, private toastr: ToastrService,
    private modalService: NgbModal, private commonservice: CommondataService) { }
    private courseslist=[];
  ngOnInit() {
    debugger;

    this.signupform = this.fb.group({
      FirstName: this.Valid.signupform.FirstName,
      LastName: this.Valid.signupform.LastName,
      Gender: this.Valid.signupform.Gender,
      AadharNumber: this.Valid.signupform.AadharNumber,
      AdmissionNumber:this.Valid.signupform.AccountNumber,
      ParentName: this.Valid.signupform.ParentName,
      ParentNumber: this.Valid.signupform.ParentNumber,
      DateOfBirth: this.Valid.signupform.DateOfBirth,
      Address: this.Valid.signupform.Address,
      RollNumber: this.Valid.signupform.RollNumber,
      BusRouteNumber: this.Valid.signupform.BusRouteNumber,
      BusRouteName: this.Valid.signupform.BusRouteName,
      ClassID: this.Valid.signupform.Class,
      SectionID: this.Valid.signupform.Section,
      Course,
      ClassName:this.Valid.signupform.ClassName,
      SectionName:this.Valid.signupform.SectionName,
      

    });
    this.GetStudentList();
    this.GetClasses();
    this.GetCourses();
   
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'CourseId',
      textField: 'CourseName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
  };
  }
  CreateStudent() {

    this.CreateStudentButton=false;
    this.DisplayStudentForm = true;
  }
  GetStudentList() {
    // tslint:disable-next-line:no-debugger
   
    this.service.GetSingleStudentList().subscribe((data: any[]) => {
      debugger;
      this.studentlist = data;
    }, error => {

    }
    );
  }

  GetCourses()
  {
   
    this.courseslist=this.commonservice.courseList;
  }
  GetClasses() {
    this.classeslist = this.commonservice.GetClasses();
  }

  GetSections(id: number) {
    this.sectionlist = this.commonservice.GetSections(id);
  }
  SchoolOrganizationID:any;

  //Register Student
  Register() {
    // tslint:disable-next-line:no-debugger
   debugger;
    if (this.student.StudentID == null) {
    //   let obj;
    //  obj = {
    //     "StudentCode":"kjsdksd"
    //   }
      debugger;
      this.service.RegisterSingleStudent(this.student).subscribe(data => {
        this.response = data;
        this.GetStudentList();
        this.DisplayStudentForm = false;
        this.toastr.success('Student', 'Sucessfully Registered!');
      }, error => {
        // this.toastr.error('Student', 'Failed Registered!');
      }
      );
    } else {
      this.service.UpdateSingleStudent(this.student).subscribe(data => {
        this.response = data;
        this.GetStudentList();
        this.DisplayStudentForm = false;
        this.toastr.success('Student', 'Sucessfully Updated!');
      }, error => {
        // this.toastr.error('Student', 'Failed Updated!');
      }
      );
    }

  }
  Cancel() {
    this.CreateStudentButton=true;
    this.DisplayStudentForm = false;
  }
//   onItemSelect(item:any){
//     console.log(item);
// }
// onSelectAll(items: any){
//     console.log(items);
//  }
  // Edit student

  EditStudent(data) {
    
    this.student = data;
    this.DisplayStudentForm = true;
  }

  GetStudent(Studentid) {
    this.service.GetStudent(Studentid).subscribe((data: any) => {
      this.editstudentdata = data;
      this.GetStudentList();
    }, error => {

    }
    );

  }
  DeleteStudent(Studentid) {
    this.service.DeleteSingleStudent(Studentid).subscribe((data: any) => {
      this.editstudentdata = data;
      this.GetStudentList();
    }, error => {

    }
    );

  }



}
