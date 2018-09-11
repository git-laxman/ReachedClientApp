import { Component, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Injectable()

export class Validation {

  constructor(private fb: FormBuilder) {

  }

  signupform = {

    FirstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    LastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    UserName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_.-]*$')]],
    ParentName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    ParentNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^(?!0+$)((\\+91-?))?(?!0+$)[1-9][0-9]{9}$')]],
    MobileNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^(?!0+$)((\\+91-?))?(?!0+$)[1-9][0-9]{9}$')]],
    // MobileNumber:['', [Validators.required,Validators.maxLength(10),Validators.pattern('^[1-9][0-9]{9}$')]],
    Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-]+\\.[a-z]|\\.[a-z]{2,4}$')]],
    // Password:['', [Validators.required,Validators.minLength(8),Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]],
    Password: ['', [Validators.required, Validators.minLength(8),
    Validators.pattern('^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[$@£!%*#?&^()+_=/-])[A-Za-z0-9$@£!%*#?&^()+_=/-]{8,}$')]],
    AadharNumber: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]*')]],
    Experience: ['', [Validators.required, Validators.maxLength(2), Validators.pattern('[0-9]*')]],
    OneNumber: ['', [Validators.required, Validators.maxLength(1), Validators.pattern('[0-9]*')]],
    FromToNumber:['', [Validators.maxLength(2), Validators.pattern('[0-9]*')]],
    Day: ['', [Validators.minLength(1),Validators.maxLength(2), Validators.pattern('[0-9]*')]],
    Salary: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]],
    
    SchoolStrength: ['', [Validators.required, Validators.maxLength(5), Validators.pattern('[0-9]*')]],
    AccountNumber: ['', [Validators.required, Validators.maxLength(16), Validators.pattern('[0-9]*')]],
    DateOfBirth: ['', [Validators.required]],
    BusRouteName: ['', [Validators.required]],
    Address: ['', [Validators.required]],
    RollNumber: ['', [Validators.required]],
    BusRouteNumber: ['', [Validators.required]],
    Gender: ['', [Validators.required]],
    Class: ['', [Validators.required]],
    Section: ['', [Validators.required]],
    EmailSignin: ['', [Validators.required]],
    PasswordSignin: ['', [Validators.required]],
    GradePool: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    maxmarks: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    marksrangefrom: ['', [Validators.required,Validators.maxLength(2), Validators.pattern('[0-9]*')]],
    marksrangeto: ['', [Validators.required,Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    grade: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    remarks: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    ExpenditureName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    CourseName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    ExamName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    message: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    DriverName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    ContactNum1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    ContactNum2: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    ActualAmount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    ConcessionAmount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    ConcessionGivenBy: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    Reason: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*$')]],
    SectionName: ['', [Validators.required]],
    ClassName: ['', [Validators.required]],
    Amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    Required: ['', [Validators.required]],
    showpass: []
  };
}
