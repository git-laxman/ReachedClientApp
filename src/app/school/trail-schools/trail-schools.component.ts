import { Component, OnInit, TemplateRef } from '@angular/core';
import { SchoolService } from '../school.service';
import { ToastrService } from 'ngx-toastr';
import { School } from '../../Common/School';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { isNullOrUndefined } from 'util';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-trail-schools',
  templateUrl: './trail-schools.component.html',
  styleUrls: ['./trail-schools.component.scss']
})
export class TrailSchoolsComponent implements OnInit {

  public schoollist = [];
  public deletestudentdata: any;
  CreateSchool: boolean;
  DisplySchool: boolean = true;
  school: School = new School();
  public schoolform: FormGroup;
  public response: any;
  modalRef: BsModalRef;
  confdata:School=new School();
  

  constructor(private fb: FormBuilder, private Valid: Validation, private service: SchoolService, private toastr: ToastrService,private modalService: BsModalService) { }
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
    this.GetSchoolList();
  }
  ViewSchool(schooluData:School, popname: TemplateRef<any>) 
  {
    if (!isNullOrUndefined(schooluData.SchoolID)) {
      // this.delInvoiceNumber = invData.InvoiceNumber;
      // this.delindex = index;
      this.modalRef = this.modalService.show(popname, { backdrop: 'static', keyboard: false });
      this.confdata=schooluData;
      return;
    }
    // this.DeleteRow(index);

}
Cancel()
{
  this.CreateSchool=false;
  this.DisplySchool=true;
}
  //Register Student
  UpdateSchool() {

    this.service.UpdateActiveSchool(this.school).subscribe(data => {
      this.response = data;
      this.toastr.success('School', 'Sucessfully Registered!');
    }, error => {
      // this.toastr.error('School', 'Failed Registered!');
    }
    );


  }
  GetSchoolList() {
   
   
    this.service.GetTrailSchoolList().subscribe((data: any[]) => {
      this.schoollist = data;
    }, error => {

    }
    );
  }
  EditSchool(data) {
    this.CreateSchool = true;
    this.DisplySchool = false;
    this.school = data;
  }

  DeleteSchool(schoolid) {
    this.service.DeleteTrailSchool(schoolid).subscribe((data: any) => {
      this.deletestudentdata = data;
      this.GetSchoolList();
    }, error => {

    }
    );

  }

}
