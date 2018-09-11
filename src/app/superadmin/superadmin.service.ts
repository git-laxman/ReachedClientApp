import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AdminLogin } from '../Common/AdminLogin';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SuperAdminService {

  //URL for CRUD operations
  postUrl = "http://localhost:3000/adminlogin";

  //Create constructor to get Http instance
  constructor(private http: Http) {
  }

  AuthenticateAdmin(adminlogin: AdminLogin): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.postUrl, adminlogin)
      .map((res: Response) => {
        const body = res;
        return body || {};
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    return Observable.throw(error.status);
  }

}
