import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AdminLogin } from '../Common/AdminLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { HelperC } from '../shared/helper-cs';

@Injectable()
export class AdminService {

  //URL for CRUD operations
  // postUrl = "http://localhost:3000/adminlogin";

  //Create constructor to get Http instance

  constructor(private http: Http,private httpclient: HttpClient,private global:GlobalApi,private helper:HelperC) {
  }
  
  AuthenticateAdminn(adminlogin: AdminLogin)
  {
    debugger;
   // var obj = "UserName=" +adminlogin.UserName + "&Password=" +adminlogin.Password;
   
  
    //var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
   
    return this.httpclient.post(this.global.AuthenticateAdmin,adminlogin,{headers: this.global.headers});
    
    //return this.httpclient.post(this.global.AuthenticateAdmin,adminlogin,{headers :this.global.reqHeader});
  }

  AuthenticateAdmin(adminlogin: AdminLogin)
  {
    debugger;
   // var obj = "UserName=" +adminlogin.UserName + "&Password=" +adminlogin.Password;
   
  
    //var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    //return this.httpclient.get("http://localhost:5001/Login?UserName="+adminlogin.UserName+"&"+"Password="+adminlogin.Password);
   //return this.httpclient.post(this.global.AuthenticateAdmin,adminlogin,{headers: this.global.headers});
    
    //return this.httpclient.post(this.global.AuthenticateAdmin,adminlogin,{headers :this.global.reqHeader});
  alert(adminlogin.UserName);
    return this.httpclient.get("http://localhost:5001/api/Token?UserName="+adminlogin.UserName+"&"+"Password="+adminlogin.Password,{headers: this.global.headers});
  
  }

 
  
    
      
  getUserClaims(){
   return  this.http.get(this.global.GetUserClaims);
  }

  // AuthenticateAdmin(adminlogin: AdminLogin): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   return this.http.post(this.postUrl, adminlogin)
  //     .map((res: Response) => {
  //       const body = res;
  //       return body || {};
  //     })
  //     .catch(this.handleError);
  // }

  // private handleError(error: Response | any) {
  //   return Observable.throw(error.status);
  // }

}
