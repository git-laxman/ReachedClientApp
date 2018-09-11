import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { Driver } from '../../Common/driver';
import { TransportationService } from '../transportation.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {
  driver: Driver = new Driver();

  public response: any;
  public driverlist = [];
  public driverform: FormGroup;
  public editstudentdata: any;
  DisplayDriverForm: boolean;
  DisplyDriver:boolean=true;
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: TransportationService, private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.driverform = this.fb.group({
      Name: this.Valid.signupform.DriverName,
      ContactNo1: this.Valid.signupform.MobileNumber,
      ContactNo2: this.Valid.signupform.MobileNumber,
      Password: this.Valid.signupform.FirstName
    });
    this.GetDriverList();
  }

  createdriver() {
    this.DisplayDriverForm = true;
  }

  GetDriverList() {
    debugger;
    this.service.RetrieveDriverList().subscribe((data: any[]) => {
      debugger;
      this.driverlist = data;
    }, error => {
    }
    );
  }

  adddriver() {
    if (this.driver.DriverID == null) {
      debugger;
      this.service.InsertDriver(this.driver).subscribe(data => {
        debugger;
        this.response = data;
        this.GetDriverList();
        this.DisplayDriverForm = false;
        this.toastr.success('Driver', 'Sucessfully Saved!');
      }, error => {
        // this.toastr.error('Driver', 'Failed Saved!');
      }
      );
    } else {
      this.service.UpdateDriver(this.driver).subscribe(data => {
        this.response = data;
        this.GetDriverList();
        this.DisplayDriverForm = false;
        this.toastr.success('Driver', 'Sucessfully Updated!');
      }, error => {
        // this.toastr.error('Driver', 'Failed Updated!');
      }
      );
    }
  }

  Cancel() {
    this.DisplayDriverForm = false;
  }

  EditDriver(data) {
    this.DisplayDriverForm = true;
   // this.DisplyDriver=false;
    this.driver = data;
  }
  GetStudent(driverid) {
    this.service.getdriver(driverid).subscribe((data: any) => {
      this.editstudentdata = data;
      this.GetDriverList();
    }, error => {
    }
    );
  }

  removedriver(DriverID) {
    this.service.DeleteDriver(DriverID).subscribe(data => {
      this.response = data;
      this.GetDriverList();
      this.DisplayDriverForm = false;
      this.toastr.success('Driver', 'Sucessfully Deleted!');
    }, error => {
      // this.toastr.error('Driver', 'Failed Deleted!');
    }
    );
  }

  CreateAddDriver() {
    this.DisplayDriverForm = true;
  }
}
