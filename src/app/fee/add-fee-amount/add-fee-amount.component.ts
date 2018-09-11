import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { Course } from '../../Common/Course';
import { FeeService } from '../fee.service';
import { ToastrService } from 'ngx-toastr';
import { Class } from '../../Common/Class';
import { dropDown } from '../../Common/dropdown';
import { FeeAmount } from '../../Common/feeamount';

@Component({
  selector: 'app-add-fee-amount',
  templateUrl: './add-fee-amount.component.html',
  styleUrls: ['./add-fee-amount.component.scss']
})
export class AddFeeAmountComponent implements OnInit {

  fee: FeeAmount = new FeeAmount();
  public response: any;
  public feeamountform: FormGroup;
  classdd: dropDown[] = [];
  coursedd: dropDown[] = [];
  DisplayAddFeeAmountForm: boolean;
  addfeeaomuntlist = [];
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: FeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.feeamountform = this.fb.group({
      CourseName: this.Valid.signupform.CourseName,
      ClassName: this.Valid.signupform.ClassName,
      Amount: this.Valid.signupform.Amount,
      InstallmentsCount: this.Valid.signupform.Required,
      installment1: this.Valid.signupform.Required,
      installment2: this.Valid.signupform.Required,
      installment3: this.Valid.signupform.Required,
      installment4: this.Valid.signupform.Required
    });
    this.RetrieveClass();
    this.retrievecourse();
  }

  RetrieveClass() {
    this.service.RetrieveClassDetails().subscribe((data: any[]) => {
      this.classdd = data;
      this.toastr.success('Course', 'Sucessfully Registered!');
    }, error => {

      // this.toastr.error('Course', 'Failed Registered!');
    }
    );
  }

  retrievecourse() {
    this.service.RetrieveCourseDetails().subscribe((data: any[]) => {
      this.coursedd = data;
      this.toastr.success('Course', 'Sucessfully Registered!');
    }, error => {
      // this.toastr.error('Course', 'Failed Registered!');
    }
    );
  }

  savefeeamount() {
    if (this.fee.FeeID == null) {
      this.service.insertfeeamountdetails(this.fee).subscribe(data => {
        this.response = data;
        this.toastr.success('fee', 'Sucessfully saved!');
        this.RetieveAddCourseList();
      }, error => {

        // this.toastr.error('fee', 'Failed saved!');
      }
      );
    } else {
      this.service.updatefeeamountdetails(this.fee).subscribe(data => {
        this.response = data;
        this.toastr.success('fee', 'Sucessfully saved!');
        this.RetieveAddCourseList();
      }, error => {

        // this.toastr.error('fee', 'Failed saved!');
      }
      );
    }

  }

  DeleteAddFeeAmount() {
    this.service.insertfeeamountdetails(this.fee).subscribe(data => {
      this.response = data;
      this.toastr.success('fee', 'Deleted saved!');
    }, error => {

      // this.toastr.error('fee', 'Deleted saved!');
    }
    );
  }

  RetieveAddCourseList() {
    this.service.getAddFeeAmountlistdetails().subscribe((data: any[]) => {
      this.addfeeaomuntlist = data;
      // this.toastr.success('Fee Amount', 'Deleted Successfully!');
    }, error => {

      // // this.toastr.error('Add Course', 'Deleted Failed!');
    }
    );
  }
  CreateAddFeeAmount() {
    this.DisplayAddFeeAmountForm = true;
  }

  Cancel() {
    this.DisplayAddFeeAmountForm = false;
  }

  EditAddFeeAmount(data) {
    this.fee = data;
  }
}
