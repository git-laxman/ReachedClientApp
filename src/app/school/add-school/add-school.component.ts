import { Component, OnInit } from '@angular/core';
import { School } from '../../Common/School';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { SchoolService } from '../school.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {
  //school: School = new School();

  school: School =
    {
      SchoolID: null,
      SchoolName: null,
      UserName: null,
      Password: null,
      PhoneNumber: null,
      Address: null,
      Email: null,
      SubscriptionStartDate: null,
      SubscriptionEndDate: null,
      Reports: null,
      Payment: null,
      Tracking: null,
      Promotions: null,
      SchoolType: null,
      SchoolCode: null,
      SchoolStrength: null,
      AccountHolderName: null,
      AccountNumber: null,
      BankName: null,
      AccountType: null,
      IFSCCode: null,
      BankAddress: null,
      MerchantID:null
    };

  public response: any;
  inputType = 'password';
  public schoolform: FormGroup;
  constructor(private fb: FormBuilder, private Valid: Validation, private service: SchoolService, private toastr: ToastrService) { }

  ngOnInit() {
    this.schoolform = this.fb.group({
      Name: this.Valid.signupform.FirstName,
      UserName: this.Valid.signupform.FirstName,
      PhoneNumber: this.Valid.signupform.ParentNumber,
      Address: this.Valid.signupform.Address,
      Email: this.Valid.signupform.Email,
      Password: this.Valid.signupform.Password,
      showpass: this.Valid.signupform.showpass,
      SubscriptionStartDate: this.Valid.signupform.Required,
      SubscriptionEndDate: this.Valid.signupform.Required,
      SchoolCode: this.Valid.signupform.Required,
      SchoolType: this.Valid.signupform.Required,
      SchoolStrength: this.Valid.signupform.SchoolStrength,
      AccountHolderName: this.Valid.signupform.FirstName,
      AccountNumber: this.Valid.signupform.AccountNumber,
      BankName: this.Valid.signupform.Required,
      AccountType: this.Valid.signupform.Required,
      IFSCCode:this.Valid.signupform.Required,
      BankAddress: this.Valid.signupform.Required,
      MerchantID:this.Valid.signupform.Required,
      Reports: [],
      Payment: [],
      Tracking: [],
      Promotions: []
    });

  }
  hideShowPassword() {
    // alert("iam hiding password");
    if (this.inputType == 'password')
      this.inputType = 'text';
    else
      this.inputType = 'password';
  }


  //Register Student
  RegisterSchool() {

    this.service.RegisterSchool(this.school).subscribe(data => {
      this.response = data;
      this.toastr.success('School', 'Sucessfully Registered!');
    }, error => {
      // this.toastr.error('School', 'Failed Registered!');
    }
    );


  }




}
