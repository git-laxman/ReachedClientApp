import { Injectable } from '@angular/core';
import { AddExam } from '../Common/addexam';
import { Grade } from '../Common/grade';
import { Marks } from '../Common/marks';
import { ScheduleExam } from '../Common/scheduleexam';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { ExamReports } from '../Common/examreports';

@Injectable()
export class ExamService {

  constructor(private http: HttpClient, private global: GlobalApi) { }

  insertexam(examdata: AddExam) {
    return this.http.post(this.global.saveExam, examdata);
  }
  getexamlist() {
    return this.http.get(this.global.GetExamList);
  }
  GetExamRecord(examid) {
    return this.http.get(this.global.GetSingleExamRecord, examid);
  }
  updateExam(examdata: AddExam) {
    return this.http.post(this.global.UpdateExam, examdata);
  }
  DeleteExam(examid) {
    return this.http.post(this.global.DeleteExam, examid);
  }


  ///// Grade

  insertgradedetails(gradedata: Grade) {
    return this.http.post(this.global.saveGrade, gradedata);
  }
  getGradelistdetails() {
    return this.http.get(this.global.GetgradeList);
  }
  GetGradeRecord(gradeid) {
    return this.http.get(this.global.GetSinglegradeRecord, gradeid);
  }
  updategradedetails(gradedata: Grade) {
    return this.http.post(this.global.Updategrade, gradedata);
  }
  removegrade(gradeid) {
    return this.http.post(this.global.Deletegrade, gradeid);
  }
  RetrieveClassDetails() {
    return this.http.get(this.global.getclass);
  }

  //// marks
  RetrieveSectionDetails() {
    return this.http.get(this.global.getsection);
  }
  RetrieveSubjectDetails() {
    return this.http.get(this.global.getsubjectdd);
  }
  InsertMarksRecords(marksdata: Marks[]) {
    return this.http.post(this.global.savemarks, marksdata);
  }
  retievemarks() {
    return this.http.get(this.global.GetMarksList);
  }
  GetMarksRecord(marksid) {
    return this.http.get(this.global.GetSingleMarksRecord, marksid);
  }
  updateMarks(marksdata: Marks) {
    return this.http.post(this.global.UpdateMarks, marksdata);
  }
  DeleteMarksRecord(marksid) {
    return this.http.post(this.global.DeleteMarks, marksid);
  }
  retrievestudentlistformarks(marksobj1) {
    return this.http.get(this.global.GetStudentRecordsList, marksobj1);
  }

  //// schedule Exam
  getsubjectByclass(className) {
    return this.http.get(this.global.GetStudentRecordsList, className);
  }
  getScheduleExamlistdetails() {
    return this.http.get(this.global.getScheduleExamlistdetails);
  }
  insertscheduleexamdetails(gradedata: ScheduleExam) {
    return this.http.post(this.global.insertscheduleexamdetails, gradedata);
  }
  updatescheduleexamdetails(gradedata: ScheduleExam) {
    return this.http.post(this.global.updatescheduleexamdetails, gradedata);
  }
  RemoveScheduleExamdetails(gradeid) {
    return this.http.post(this.global.RemoveScheduleExamdetails, gradeid);
  }

  ////// Reports

  getExamReportsListdetails(reports) {
    return this.http.get(this.global.getExamReportsListdetails, reports);
  }

}
