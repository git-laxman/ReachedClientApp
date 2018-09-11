import { Injectable } from '@angular/core';
import { Communication } from '../Common/communication';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { dropDown } from '../Common/dropdown';

@Injectable()
export class CommunicationService {

  constructor(private http: HttpClient, private global: GlobalApi) { }

  savecomposedmessage(dataobj: Communication) {
    return this.http.post(this.global.SaveMessage, dataobj);
  }

  RetrieveClassDetails() {
    const getclass: dropDown[] = [{ Item1: '1', Item2: '10th' }, { Item1: '2', Item2: '9th' }, { Item1: '3', Item2: '8th' }];
    return getclass;
    // return this.http.get(this.global.getclass);
  }
  RetrieveStudentbyclassandsection(dataobj) {
    return this.http.get(this.global.getstudentnamebyclassandsection, dataobj);
  }
  RetrieveCommunicationList() {
    return this.http.get(this.global.RetrieveCommunicationList);
  }

  Updatecomposedmessage(dataobj: Communication) {
    return this.http.post(this.global.Updatecomposedmessage, dataobj);
  }
  RemoveCommunication(ID) {
    return this.http.post(this.global.RemoveCommunication, ID);
  }
}
