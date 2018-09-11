import { Injectable } from '@angular/core';
import { Driver } from '../Common/driver';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { AddDriverRoute } from '../Common/adddriverroute';

@Injectable()
export class TransportationService {

  constructor(private http: HttpClient, private global: GlobalApi) { }

  InsertDriver(driverdata: Driver) {
    debugger;
    return this.http.post(this.global.savedriver, driverdata);
  }
  RetrieveDriverList() {
    return this.http.get(this.global.getdriverlist);
  }
  getdriver(driverid: any) {
    return this.http.get(this.global.GetSingleDriver, driverid);
  }
  UpdateDriver(driverdata: Driver) {
    return this.http.post(this.global.UpdateSingleDriver, driverdata);
  }
  DeleteDriver(driverid) {
    return this.http.post(this.global.DeleteDriver, driverid);
  }

  InsertRoute(routedata: AddDriverRoute) {
    return this.http.post(this.global.saveroute, routedata);
  }

  UpdateDriverRoute(routedata: AddDriverRoute) {
    return this.http.post(this.global.updatedriverroute, routedata);
  }

  RetrieveDriverDD() {
    return this.http.get(this.global.getdriverdd);
  }

}
