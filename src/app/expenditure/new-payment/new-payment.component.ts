import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { NewPayment } from '../../Common/expenditure';
import { ExpenditureService } from '../expenditure.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dropDown } from '../../Common/dropdown';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {

  newpaymentobj: NewPayment = new NewPayment();
  public response: any;
  public NewPaymentlist = [];
  public newpaymentform: FormGroup;
  public editNewPaymentdata: any;
  Displaynewpaymentform: boolean;
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
    this.newpaymentform = this.fb.group({
      CategoryName: this.Valid.signupform.Required,
      PaymentType: this.Valid.signupform.Required,
      TotalPayment: this.Valid.signupform.Required,
      AdvancePayment: this.Valid.signupform.Required,
      NewPaymentDate: this.Valid.signupform.Required,
      NewPaymentAmount: this.Valid.signupform.Required,
      NewPaymentQuantity: this.Valid.signupform.Required,
      NewPaymentComments: this.Valid.signupform.Required,
      NewPaymentPaidBy: this.Valid.signupform.Required,
      AdvanceDate: this.Valid.signupform.Required,
      AdvanceAmount: this.Valid.signupform.Required,
      AdvanceQuantity: this.Valid.signupform.Required,
      AdvanceComments: this.Valid.signupform.Required,
      AdvancePaidBy: this.Valid.signupform.Required
    });
    this.RetrieveNewPaymentList();
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


  RetrieveNewPaymentList() {
    this.service.RetrieveNewPaymentList().subscribe((data: any[]) => {
      this.NewPaymentlist = data;
      this.toastr.success('New Payment', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Class', 'Retrieved Failed!');
    }
    );
  }

  Savenewpayment() {
    if (this.newpaymentobj.NewPaymentID == null) {
      this.service.insertnewpayment(this.newpaymentobj).subscribe(data => {
        this.response = data;
        this.RetrieveNewPaymentList();
        this.Displaynewpaymentform = false;
        this.toastr.success('newpayment', 'Sucessfully Registered!');
      }, error => {
        // this.toastr.error('newpaymentRecord', 'Failed Registered!');
      }
      );
    } else {
      this.service.updatenewpayment(this.newpaymentobj).subscribe(data => {
        this.response = data;
        this.RetrieveNewPaymentList();
        this.Displaynewpaymentform = false;
        this.toastr.success('new payment Record', 'Sucessfully Updated!');
      }, error => {
        // this.toastr.error('newpaymentRecord', 'Failed Updated!');
      }
      );
    }

  }
  Cancel() {
    this.Displaynewpaymentform = false;
  }

  CreateNewPayment() {
    this.Displaynewpaymentform = true;
  }


  EditnewpaymentRecord(data) {
    this.newpaymentobj = data;
  }

  GetnewpaymentRecord(newpaymentid) {
    this.service.GetnewpaymentRecord(newpaymentid).subscribe((data: any) => {
      this.editNewPaymentdata = data;
      this.RetrieveNewPaymentList();
    }, error => {
    }
    );
  }

  DeletenewpaymentRecord(newpaymentId) {
    this.service.DeletenewpaymentRecord(newpaymentId).subscribe(data => {
      this.RetrieveNewPaymentList();
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
