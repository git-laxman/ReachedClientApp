import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../Shared/Validator';
import { Expenditure } from '../Common/expenditure';
import { ExpenditureService } from './expenditure.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent implements OnInit {

  expenditure: Expenditure = new Expenditure();
  public response: any;
  public expenditureform: FormGroup;
  DisplayAddexpenditureform: boolean;
  expenditurelist = [];
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: ExpenditureService, private toastr: ToastrService) { }

  ngOnInit() {
    this.expenditureform = this.fb.group({
      ExpenditureName: this.Valid.signupform.ExpenditureName,
      SubCategories: this.Valid.signupform.Required
    });
  }

  saveExpenditure() {
    if (this.expenditure.ExpendiureID == null) {
      this.service.insertexpendituredetails(this.expenditure).subscribe(data => {
        this.response = data;
        this.toastr.success('Expenditure', 'Sucessfully saved!');
        this.RetieveExpenditureList();
      }, error => {
        // this.toastr.error('Expenditure', 'Failed saved!');
      }
      );
    } else {
      this.service.updateExpendituredetails(this.expenditure).subscribe(data => {
        this.response = data;
        this.toastr.success('expenditure', 'Updated saved!');
        this.RetieveExpenditureList();
      }, error => {

        // this.toastr.error('expenditure', 'Updated saved!');
      }
      );
    }

  }

  DeleteExpenditure() {
    this.service.RemoveExpendituredetails(this.expenditure).subscribe(data => {
      this.response = data;
      this.toastr.success('fee', 'Deleted saved!');
    }, error => {

      // this.toastr.error('fee', 'Deleted saved!');
    }
    );
  }

  RetieveExpenditureList() {
    this.service.getExpendituredetails().subscribe((data: any[]) => {
      this.expenditurelist = data;
      // this.toastr.success('Fee Amount', 'Deleted Successfully!');
    }, error => {

      // // this.toastr.error('Add Course', 'Deleted Failed!');
    }
    );
  }
  CreateExpenditure() {
    this.DisplayAddexpenditureform = true;
  }

  Cancel() {
    this.DisplayAddexpenditureform = false;
  }

  EditExpenditure(data) {
    this.expenditure = data;
  }

}
