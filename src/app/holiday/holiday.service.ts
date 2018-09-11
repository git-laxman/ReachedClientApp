import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { Holiday } from '../Common/Holiday';

@Injectable()
export class HolidayService {

  constructor(private http: HttpClient, private global: GlobalApi) { }
  // HolidayService
  RegisterHoliday(data: Holiday) {
    return this.http.post(this.global.RegisterHoliday, data);
  }
  GetHolidays() {
    return this.http.get(this.global.GetHolidays);
  }
  UpdateHoliday(data: Holiday) {
    return this.http.post(this.global.UpdateHoliday, data);
  }
  DeleteHoliday(holidayid) {
    return this.http.post(this.global.DeleteHoliday, holidayid);
  }

}
