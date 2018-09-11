import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { BalancePayment } from '../../Common/expenditure';
import { ExpenditureService } from '../expenditure.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dropDown } from '../../Common/dropdown';

@Component({
  selector: 'app-balance-payment',
  templateUrl: './balance-payment.component.html',
  styleUrls: ['./balance-payment.component.scss']
})
export class BalancePaymentComponent implements OnInit {

  balancepaymentobj: BalancePayment = new BalancePayment();
  public response: any;
  public BalancePaymentlist = [];
  public balancepaymentform: FormGroup;
  public editBalancePaymentdata: any;
  Displaybalancepaymentform: boolean;
  DisplayTotalPaymentForm: boolean;
  DisplayAdvancePaymentForm: boolean;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  private Categorylist = [];

  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: ExpenditureService, private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.balancepaymentform = this.fb.group({
      CategoryName: this.Valid.signupform.Required,
      PaymentType: this.Valid.signupform.Required,
      TotalPayment: this.Valid.signupform.Required,
      AdvancePayment: this.Valid.signupform.Required,
      BalancePaymentDate: this.Valid.signupform.Required,
      BalancePaymentAmount: this.Valid.signupform.Required,
      BalancePaymentQuantity: this.Valid.signupform.Required,
      BalancePaymentComments: this.Valid.signupform.Required,
      BalancePaymentPaidBy: this.Valid.signupform.Required,
      AdvanceDate: this.Valid.signupform.Required,
      AdvanceAmount: this.Valid.signupform.Required,
      AdvanceQuantity: this.Valid.signupform.Required,
      AdvanceComments: this.Valid.signupform.Required,
      AdvancePaidBy: this.Valid.signupform.Required
    });
    this.RetrieveBalancePaymentlist();
    this.RetrieveCategoryDD();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'CategoryId',
      textField: 'CategoryName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  RetrieveCategoryDD() {
    this.service.RetrieveCategoryDD().subscribe((data: any[]) => {
      this.Categorylist = data;
      this.toastr.success('Category', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Class', 'Retrieved Failed!');
    }
    );
  }


  RetrieveBalancePaymentlist() {
    this.service.RetrieveBalancePaymentlist().subscribe((data: any[]) => {
      this.BalancePaymentlist = data;
      this.toastr.success('Class', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Class', 'Retrieved Failed!');
    }
    );
  }

  SaveBalancePayment() {
    if (this.balancepaymentobj.BalancePaymentID == null) {
      this.service.insertbalancepayment(this.balancepaymentobj).subscribe(data => {
        this.response = data;
        this.RetrieveBalancePaymentlist();
        this.Displaybalancepaymentform = false;
        this.toastr.success('balance payment', 'Sucessfully Registered!');
      }, error => {
        // this.toastr.error('BalancePaymentRecord', 'Failed Registered!');
      }
      );
    } else {
      this.service.updatebalancepayment(this.balancepaymentobj).subscribe(data => {
        this.response = data;
        this.RetrieveBalancePaymentlist();
        this.Displaybalancepaymentform = false;
        this.toastr.success('balance payment', 'Sucessfully Updated!');
      }, error => {
        // this.toastr.error('BalancePaymentRecord', 'Failed Updated!');
      }
      );
    }

  }
  Cancel() {
    this.Displaybalancepaymentform = false;
  }

  CreateBalancePayment() {
    this.Displaybalancepaymentform = true;
  }


  EditBalancePaymentRecord(data) {
    this.balancepaymentobj = data;
  }

  GetBalancePaymentRecord(balpaymentid) {
    this.service.GetBalancePaymentRecord(balpaymentid).subscribe((data: any) => {
      this.editBalancePaymentdata = data;
      this.RetrieveBalancePaymentlist();
    }, error => {
    }
    );
  }

  DeleteBalancePaymentRecord(balpaymentid) {
    this.service.DeleteBalancePaymentRecord(balpaymentid).subscribe(data => {
      this.RetrieveBalancePaymentlist();
    }, error => {
    }
    );
  }


  setradio(e: string) {
    if (e === 'TotalPayment') {
      this.DisplayTotalPaymentForm = true;
      this.DisplayAdvancePaymentForm = false;

    } else {
      this.DisplayAdvancePaymentForm = true;
      this.DisplayTotalPaymentForm = false;
    }
  }

}
