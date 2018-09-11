import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { AdminLogin } from '../../Common/AdminLogin';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { debug } from 'util';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
  animations: [routerTransition()]
})
export class AdminLoginComponent implements OnInit {
  public signinform: FormGroup;
  public loading = false;
  //declarations
  adminlogin: AdminLogin = new AdminLogin();
  constructor(private adminloginservice: AdminService,private httpclient: HttpClient ,private fb: FormBuilder, private Valid: Validation,private toastr: ToastrService  ,private spinner: NgxSpinnerService,private router : Router) { }
  passwordmessage: string;
  inputType = 'password';
  response:any;
  invalidLogin:any;
  dataarray:any={};
  hideShowPassword() {

    if (this.inputType == 'password')
      this.inputType = 'text';
    else
      this.inputType = 'password';
  }
  // login() 
  // {
  //   this.loading = true;
  //   this.spinner.show();
  //  
  //   this.adminloginservice.AuthenticateAdmin(this.adminlogin).subscribe(data => {
      
  //     this.loading = false;
  //     this.spinner.hide();
  //     this.toastr.success('Admin', 'Sucessfully Loggedin!');
  //   }, error =>{
  //     this.loading = false;
  //     this.spinner.hide();
  //     // this.toastr.error('Admin', 'Failed Loggedin!');
  //   }
  //   )
  // }

  login(){
    debugger;
    alert("Hii");
    // this.adminloginservice.AuthenticateAdmin(this.adminlogin).subscribe((data : any)=>{
      this.adminloginservice.AuthenticateAdmin(this.adminlogin).subscribe(data=>{
     
        alert("hello madhukiran");
        this.response=data;
        let token = (<any>this.response).token;
        alert(token);
debugger
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.router.navigate(["/admin"]);

     alert("jai hind");

// debugger;
//      localStorage.setItem('userToken',data.access_token);
//      this.toastr.success('Admin', 'Sucessfully Loggedin!');
//      this.router.navigate(['/admin']);

   },
   (err : HttpErrorResponse)=>{
     alert("Provide Valid Details")
    // this.toastr.error('Admin', 'Failed Loggedin!');
   })
alert("hey");
// debugger;
// this.httpclient.get("http://localhost:5001/api/Auth?UserName="+this.adminlogin.UserName+"&"+"Password="+this.adminlogin.Password, {
     
// headers: new HttpHeaders({
//         "Content-Type": "application/json"
//       })
//     }).subscribe(response => {
//       let token = (<any>response).token;
//       localStorage.setItem("jwt", token);
//       this.invalidLogin = false;
//       this.router.navigate(["/"]);
//     }, err => {
//       this.invalidLogin = true;
//     });


 }

  ngOnInit() 
  {
    
    this.signinform = this.fb.group({

      UserName: this.Valid.signupform.EmailSignin,
      PasswordSignin: this.Valid.signupform.PasswordSignin

    });
  }

}
