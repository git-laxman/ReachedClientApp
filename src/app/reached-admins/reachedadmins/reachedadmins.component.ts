import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { ReachedadminService } from '../reachedadmin.service';
import { ToastrService } from 'ngx-toastr';
import { RAdmin } from '../../Common/RAdmin';

@Component({
  selector: 'app-reachedadmins',
  templateUrl: './reachedadmins.component.html',
  styleUrls: ['./reachedadmins.component.scss']
})
export class ReachedadminsComponent implements OnInit {
  admin: RAdmin = new RAdmin();
  public response: any;
  inputType = 'password';
  public adminform: FormGroup;
  adminllist = [];
  AddAdmin: boolean;
  DisplyAdmin: boolean = true;
  constructor(private fb: FormBuilder, private Valid: Validation, private service: ReachedadminService, private toastr: ToastrService) { }

  ngOnInit() {
    this.adminform = this.fb.group({
      Name: this.Valid.signupform.FirstName,
      UserName: this.Valid.signupform.FirstName,
      PhoneNumber: this.Valid.signupform.ParentNumber,
      Address: this.Valid.signupform.Address,
      Email: this.Valid.signupform.Email,
      Password: this.Valid.signupform.Password,
      showpass: this.Valid.signupform.showpass,
      Designation: this.Valid.signupform.Required,
      CanCreateSchool: [],
      CanCreateAdmin: [],
    });
    this.GetSchoolList();

  }
  GetSchoolList() {
   
    this.service.GetAdminsList().subscribe((data: any[]) => {
      this.adminllist = data;
    }, error => {

    }
    );
  }

  Cancel()
  {
    this.AddAdmin=false;
    this.DisplyAdmin=true;
  }

  //Register Admin
  RegisterAdmin() {
   
    if (this.admin.RAdminID == null) {
      this.service.RegisterAdmin(this.admin).subscribe(data => {
        this.response = data;
        this.GetSchoolList();
        this.toastr.success('Admin', 'Sucessfully Registered!');
      }, error => {
        // this.toastr.error('Admin', 'Failed Registered!');
      }
      );
    }
    else {
      this.service.UpdateAdmin(this.admin).subscribe(data => {
        this.response = data;
        this.GetSchoolList();
        this.toastr.success('Admin', 'Sucessfully Updated!');
      }, error => {
        // this.toastr.error('Admin', 'Failed Updated!');
      }
      );
    }

  }
  EditAdmin(data)
  {
this.admin=data;
  }

  CreateAdmin() {
    this.DisplyAdmin = false;
    this.AddAdmin = true;
  }

  hideShowPassword() {
    if (this.inputType == 'password')
      this.inputType = 'text';
    else
      this.inputType = 'password';
  }


}
