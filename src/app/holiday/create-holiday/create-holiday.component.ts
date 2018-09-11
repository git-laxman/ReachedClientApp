import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { HolidayService } from '../holiday.service';
import { ToastrService } from 'ngx-toastr';
import { Holiday } from '../../Common/Holiday';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-create-holiday',
  templateUrl: './create-holiday.component.html',
  styleUrls: ['./create-holiday.component.scss']
})
export class CreateHolidayComponent implements OnInit {

  public holidayform: FormGroup;
  holiday: Holiday = new Holiday();
  displayholiday: boolean;
  CreateHolidayButton:boolean=true;
  response: any;
  holidaylist = [];
  singledatedisplay: boolean;
  multydatedisplay: boolean;
  // requireddate: boolean;
  // requiremultidate: boolean;
  constructor(private fb: FormBuilder, private Valid: Validation, private service: HolidayService, private toastr: ToastrService) { }

  ngOnInit() {
    this.holidayform = this.fb.group({
      Title: this.Valid.signupform.FirstName,
      Description: this.Valid.signupform.LastName,
      HolidayType: this.Valid.signupform.Gender,
      SingleDate: [],
      MultiDate: [],
      SMS: [],
      Mail: [],
      AppNotification: []
    });
    this.GetHolidays();
  }
  setradio(e: string) {
    if (e === 'single') {
      this.holiday.MultiDate = null;
      this.singledatedisplay = true;
      this.multydatedisplay = false;

    } else {
      this.holiday.SingleDate = null;
      this.multydatedisplay = true;
      this.singledatedisplay = false;
    }
  }
  RegisterHoliday() {
    if (!isNullOrUndefined(this.holiday.SingleDate) || !isNullOrUndefined(this.holiday.MultiDate)) {
      if (this.holiday.HolidayID == null) {

        this.service.RegisterHoliday(this.holiday).subscribe(data => {
          this.response = data;
          this.GetHolidays();
          this.toastr.success('Teacher', 'Sucessfully Registered!');
        }, error => {

          // this.toastr.error('Teacher', 'Failed Registered!');
        }
        );
      } else {
        this.service.UpdateHoliday(this.holiday).subscribe(data => {
          this.response = data;
          this.GetHolidays();
          this.toastr.success('Teacher', 'Sucessfully Updated!');
        }, error => {

          // this.toastr.error('Teacher', 'Failed Update!');
        }
        );
      }
    } else {
      // this.toastr.error('Date is Required!');
    }
  }
  GetHolidays() {
    this.service.GetHolidays().subscribe((data: any[]) => {
      this.holidaylist = data;
    }, error => {

    }
    );
  }

  DeleteTeacher(id) {
    this.service.DeleteHoliday(id).subscribe(data => {
      this.response = data;
      this.GetHolidays();
      this.toastr.success('Teacher', 'Sucessfully Deleted!');
    }, error => {

      // this.toastr.error('Teacher', 'Failed Deleted!');
    }
    );

  }
  EditHoliday(teachersdata) {
    this.holiday = teachersdata;
  }
  CreateHoliday() {
    this.displayholiday = true;
    this.CreateHolidayButton=false;
  }
  Cancel() {
    this.displayholiday = false;
    this.CreateHolidayButton=true;
    
  }


}
