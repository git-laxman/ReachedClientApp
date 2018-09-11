import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { RAdmin } from '../Common/RAdmin';

@Injectable()
export class ReachedadminService {

  constructor(private http: HttpClient, private global: GlobalApi) { }



  GetAdminsList() {
    return this.http.get(this.global.GetAdminsList);
  }
 
  RegisterAdmin(data: RAdmin) {
  
    return this.http.post(this.global.RegisterAdmin, data);
  }

  UpdateAdmin(data: RAdmin) {
  
    return this.http.post(this.global.UpdateAdmin, data);
  }

  DeleteAdmin(adminid)
  {
    return this.http.post(this.global.DeleteAdmin, adminid);
    
  }

}
