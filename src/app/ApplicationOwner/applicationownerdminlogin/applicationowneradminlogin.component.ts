import { Component, OnInit } from '@angular/core';
import { AdminLogin } from '../../Common/AdminLogin';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { ToastrService } from 'ngx-toastr';
import { ApplicationOwnerAdminService } from '../applicationowneradmin.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-applicationowneradminlogin',
  templateUrl: './applicationowneradminlogin.component.html',
  styleUrls: ['./applicationowneradminlogin.component.scss']
})
export class ApplicationowneradminloginComponent implements OnInit {

  public signinform: FormGroup;
  public loading = false;
  //declarations
  adminlogin: AdminLogin = new AdminLogin();
  constructor(private applicationowneradminloginservice: ApplicationOwnerAdminService, private fb: FormBuilder, private Valid: Validation,private toastr: ToastrService,private spinner: NgxSpinnerService) { }
  passwordmessage: string;
  inputType = 'password';

  hideShowPassword() {

    if (this.inputType == 'password')
      this.inputType = 'text';
    else
      this.inputType = 'password';
  }
  login() 
  {
    this.loading = true;
    this.spinner.show();
   
    this.applicationowneradminloginservice.AuthenticateAdmin(this.adminlogin).subscribe(data => {
      this.adminlogin = data;
      this.loading = false;
      this.spinner.hide();
      this.toastr.success('ApplicationownerAdmin', 'Sucessfully Loggedin!');
    }, error =>{
      this.loading = false;
      this.spinner.hide();
      // this.toastr.error('SuperAdmin', 'Failed Loggedin!');
    }
    )
  }
  ngOnInit() {
    this.signinform = this.fb.group({

      UserName: this.Valid.signupform.EmailSignin,
      PasswordSignin: this.Valid.signupform.PasswordSignin

    });
  }

}
