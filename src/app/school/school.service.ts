import { Injectable } from '@angular/core';
import { School } from '../Common/School';
import { HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';

@Injectable()
export class SchoolService {

  constructor(private http: HttpClient, private global: GlobalApi) { }

  RegisterSchool(data: School) {
  
    return this.http.post(this.global.RegisterSchool, data);
  }
 
 

  //Active School
  GetActiveSchoolList() {
    let Schooldata: School[] = [
      {SchoolID: 1,AccountHolderName:'sandeep',AccountNumber:'22222222222',AccountType:'SavingsAccount',Address:'hyderabad',BankAddress:'amangal',BankName:'sbi',Email:'sandep@gmail.com',
       IFSCCode:'11111',MerchantID:'111',Password:'11111',Payment:true,PhoneNumber:'00000007',Promotions:true,Reports:true,SchoolCode:'777',SchoolName:'vvv',SchoolStrength:'500',SchoolType:'Active',
       SubscriptionEndDate:'1/2/2018',SubscriptionStartDate:'2/2/2018',Tracking:true,UserName:'sandeep'
       }
       ];
     return Schooldata;
    //return this.http.get(this.global.GetActiveSchoolList);
  }
  DeleteActiveSchool(schoolid)
  {
    return this.http.post(this.global.DeleteActiveSchool, schoolid);
  }
  

  UpdateActiveSchool(data: School) {
  
    return this.http.post(this.global.UpdateActiveSchool, data);
  }
 //InActiveSchool
  GetInActiveSchoolList() {
    return this.http.get(this.global.GetInActiveSchoolList);
  }
  DeleteInActiveSchool(schoolid)
  {
    return this.http.post(this.global.DeleteInActiveSchool, schoolid);
  }
  UpdateInActiveSchool(data: School) {
  
    return this.http.post(this.global.UpdateInActiveSchool, data);
  }
  //Trail School
  GetTrailSchoolList() {
    return this.http.get(this.global.GetTrailSchoolList);
  }
  DeleteTrailSchool(schoolid)
  {
    return this.http.post(this.global.DeleteTrailSchool, schoolid);
  }
  UpdateTrailSchool(data: School) {
  
    return this.http.post(this.global.UpdateTrailSchool, data);
  }

 

}
