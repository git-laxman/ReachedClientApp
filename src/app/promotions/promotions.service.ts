import { Injectable } from '@angular/core';
import { QuestionPromotions, UploadPromotions } from '../Common/promotions';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';

@Injectable()
export class PromotionsService {

  constructor(private http: HttpClient, private global: GlobalApi) { }

  RetrieveClassDetails() {
    return this.http.get(this.global.getclass);
  }

  insertquestionPromotions(quesdata: QuestionPromotions) {
    return this.http.post(this.global.insertquestionPromotions, quesdata);
  }
  getquestionpomotionslist() {
    return this.http.get(this.global.getquestionpomotionslist);
  }

  updatequestionPromotions(quesdata: QuestionPromotions) {
    return this.http.post(this.global.updatequestionPromotions, quesdata);
  }
  removequestionpomotions(quesid) {
    return this.http.post(this.global.removequestionpomotions, quesid);
  }

  /////// uploads
  insertUploadPics(picdata: UploadPromotions) {
    return this.http.post(this.global.insertUploadPics, picdata);
  }
  getUploadPicslist() {
    return this.http.get(this.global.getUploadPicslist);
  }

  updateUploadPics(picdata: UploadPromotions) {
    return this.http.post(this.global.updateUploadPics, picdata);
  }
  removeUploadPics(picid) {
    return this.http.post(this.global.removeUploadPics, picid);
  }

}
