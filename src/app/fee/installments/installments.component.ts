import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { FeeService } from '../fee.service';
import { ToastrService } from 'ngx-toastr';
import { dropDown } from '../../Common/dropdown';
import { Installments } from '../../Common/installments';

@Component({
  selector: 'app-installments',
  templateUrl: './installments.component.html',
  styleUrls: ['./installments.component.scss']
})
export class InstallmentsComponent implements OnInit {

  Installmentobj: Installments = new Installments();
  public response: any;
  public installmentform: FormGroup;
  classdd: dropDown[] = [];
  DispalyInstallmentForm: boolean;
  subjectdd: dropDown[] = [];
  FeeAmountDD: dropDown[] = [];
  InstallmentList = [];
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: FeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.installmentform = this.fb.group({
      SectionName: this.Valid.signupform.SectionName,
      ClassName: this.Valid.signupform.ClassName,
      Amount: this.Valid.signupform.Amount,
      InstallmentsCount: this.Valid.signupform.Required,
      FeeAmount: this.Valid.signupform.Required,
      installment1: this.Valid.signupform.Required,
      installment2: this.Valid.signupform.Required,
      installment3: this.Valid.signupform.Required,
      installment4: this.Valid.signupform.Required,
      installment5: this.Valid.signupform.Required,
      installment6: this.Valid.signupform.Required,
      installment7: this.Valid.signupform.Required,
      installment8: this.Valid.signupform.Required,
      installment9: this.Valid.signupform.Required,
      installment10: this.Valid.signupform.Required,
      installment11: this.Valid.signupform.Required,
      installment12: this.Valid.signupform.Required,

    });
    this.RetrieveClass();
    this.RetrieveSubjectDD();
  }

  RetrieveClass() {
    this.service.RetrieveClassDetails().subscribe((data: any[]) => {
      this.classdd = data;
      this.toastr.success('Class', 'Sucessfully Registered!');
    }, error => {

      // this.toastr.error('Class', 'Failed Registered!');
    }
    );
  }

  RetrieveFeeAmount() {
    this.service.RetrieveFeeAmountDetails().subscribe((data: any[]) => {
      this.FeeAmountDD = data;
      this.toastr.success('Fee Amount', 'Sucessfully Registered!');
    }, error => {

      // this.toastr.error('Fee Amount', 'Failed Registered!');
    }
    );
  }

  RetrieveSubjectDD() {
    this.service.RetrieveSubjectDetails().subscribe((data: any[]) => {
      this.subjectdd = data;
      this.toastr.success('Subject', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Subject', 'Retrieved Failed!');
    }
    );
  }

  SaveInstallment() {
    if (this.Installmentobj.installmentID == null) {
      this.service.insertInstallmentdetails(this.Installmentobj).subscribe(data => {
        this.response = data;
        this.toastr.success('fee', 'Sucessfully saved!');
        this.RetieveInstallmentsList();
      }, error => {

        // this.toastr.error('fee', 'Failed saved!');
      }
      );
    } else {
      this.service.updateInstallmentdetails(this.Installmentobj).subscribe(data => {
        this.response = data;
        this.toastr.success('fee', 'Sucessfully saved!');
        this.RetieveInstallmentsList();
      }, error => {

        // this.toastr.error('fee', 'Failed saved!');
      }
      );
    }

  }

  DeleteInstallment(installmentID) {
    this.service.RemoveInstallmentdetails(installmentID).subscribe(data => {
      this.response = data;
      this.toastr.success('fee', 'Deleted saved!');
    }, error => {

      // this.toastr.error('fee', 'Deleted saved!');
    }
    );
  }

  RetieveInstallmentsList() {
    this.service.getInstallmentlistdetails().subscribe((data: any[]) => {
      this.InstallmentList = data;
      // this.toastr.success('Fee Amount', 'Deleted Successfully!');
    }, error => {

      // // this.toastr.error('Add Course', 'Deleted Failed!');
    }
    );
  }
  CreateInstallment() {
    this.DispalyInstallmentForm = true;
  }

  Cancel() {
    this.DispalyInstallmentForm = false;
  }

  EditInstallment(data) {
    this.Installmentobj = data;
  }

}
