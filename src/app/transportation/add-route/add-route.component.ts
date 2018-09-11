import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { AddDriverRoute } from '../../Common/adddriverroute';
import { TransportationService } from '../transportation.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dropDown } from '../../Common/dropdown';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.scss']
})
export class AddRouteComponent implements OnInit {

  addroute: AddDriverRoute = new AddDriverRoute();
  newaddroute: AddDriverRoute = new AddDriverRoute();
  public response: any;
  public routelist = [];
  public addrouteform: FormGroup;
  // public editstudentdata: any;
  fieldArrayName = [];
  assigndriverdd: dropDown[] = [];

  DisplayAddrouteform: boolean;
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: TransportationService, private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.addrouteform = this.fb.group({
      BusNumber: this.Valid.signupform.Required,
      RouteName: this.Valid.signupform.Required,
      RouteNumber: this.Valid.signupform.Required,
      IMEINumber: this.Valid.signupform.Required,
      AssignToDriver: this.Valid.signupform.Required,
      PickUpPoint: []
    });
    this.GetRouteList();
    this.RetrieveDriver();
  }

  GetRouteList() {
    this.service.RetrieveDriverList().subscribe((data: any[]) => {
      this.routelist = data;
    }, error => {
    }
    );
  }


  RetrieveDriver() {
    this.service.RetrieveDriverDD().subscribe((data: any[]) => {
      this.assigndriverdd = data;
      this.toastr.success('Class', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Class', 'Retrieved Failed!');
    }
    );
  }

  deleterow(index) {
    this.fieldArrayName.splice(index, 1);
  }
  addrow() {
    this.fieldArrayName.push(this.newaddroute);
    this.newaddroute = new AddDriverRoute();
  }

  Createroute() {
    if (this.addroute.RouteID == null) {
      // this.addroute.PickUpPoint
      this.service.InsertRoute(this.addroute).subscribe(data => {
        this.response = data;
        this.GetRouteList();
        this.DisplayAddrouteform = false;
        this.toastr.success('Route', 'Sucessfully Saved!');
      }, error => {
        // this.toastr.error('Route', 'Failed Saved!');
      }
      );
    } else {
      this.service.UpdateDriverRoute(this.addroute).subscribe(data => {
        this.response = data;
        this.GetRouteList();
        this.DisplayAddrouteform = false;
        this.toastr.success('Route', 'Sucessfully Updated!');
      }, error => {
        // this.toastr.error('Route', 'Failed Updated!');
      }
      );
    }
  }

  Cancel() {
    this.DisplayAddrouteform = false;
  }

  EditRoute(data) {
    this.DisplayAddrouteform = true;
    this.addroute = data;
  }

  GetRoute(routeid) {
    this.service.getdriver(routeid).subscribe((data: any) => {
      this.EditRoute = data;
      this.GetRouteList();
    }, error => {
    }
    );
  }

  removeRoute(routeid) {
    this.service.DeleteDriver(routeid).subscribe(data => {
      this.response = data;
      this.GetRouteList();
      this.DisplayAddrouteform = false;
      this.toastr.success('Route', 'Sucessfully Deleted!');
    }, error => {
      // this.toastr.error('Route', 'Failed Deleted!');
    }
    );
  }

  CreateAddRoute() {
    this.DisplayAddrouteform = true;
  }

}
