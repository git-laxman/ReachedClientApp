import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHolidayComponent } from './create-holiday/create-holiday.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HolidayRoutingModule } from './holiday-routing.module';
import { Validation } from '../Shared/Validator';
import { GlobalApi } from '../shared/global-api';
import { HolidayService } from './holiday.service';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, HolidayRoutingModule, HttpClientModule, BsDatepickerModule.forRoot()
  ],
  declarations: [CreateHolidayComponent],
  providers: [Validation, GlobalApi, HolidayService]
})
export class HolidayModule { }
