import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalApi } from '../shared/global-api';
import { Subject } from '../Common/Subject';
import { Class } from '../Common/Class';
import { AssignSubjectTeachertoClass } from '../Common/AssignSubjectTeachertoClass';
import { debug } from 'util';

@Injectable()
export class TimetableService {

  constructor(private http: HttpClient, private global: GlobalApi) { }

 

  //subject
  AddSubject(subject: Subject) {
  debugger;
    return this.http.post(this.global.AddSubject, subject);
  }
  GetSubjects() {
    return this.http.get(this.global.GetSubjects);
  }
  UpdateSubject(subject: Subject) {
    return this.http.post(this.global.UpdateSubject, subject);
  }
  DeleteSubject(subjectid)
  {
   return this.http.post(this.global.DeleteSubject, subjectid);
    
  }


  //AssignSubjectTeachertoClass
  GetTeachers() {
    return this.http.get(this.global.GetTeachers);
  }
  AssignSubjectTeachertoClass(data: AssignSubjectTeachertoClass) {
    return this.http.post(this.global.AssignSubjectTeachertoClass, data);
  }
  GetAssignSubjectTeachertoClass() {
    return this.http.get(this.global.GetAllAssignSubjectTeacher);
  }
  UpdateAssignSubjectTeachertoClass(data: AssignSubjectTeachertoClass) {
    return this.http.post(this.global.UpdateAssignSubjectTeachertoClass, data);
  }
  DeleteAssignSubjectTeachertoClass(subjectid)
  {
   return this.http.post(this.global.DeleteAssignSubjectTeachertoClass, subjectid);
    
  }



  //Class Service
  AddClassAndSection(classdata: Class) {
    debugger;
    return this.http.post(this.global.AddClassAndSection, classdata);
  }
  GetClassList() {
    return this.http.get(this.global.GetClassList);
  }

  UpdateClassAndSection(classdata: Class) {
    return this.http.post(this.global.UpdateClassAndSection, classdata);
  }
  DeleteClassAndSection(sectionclassid)
  {
    return this.http.post(this.global.UpdateClassAndSection, sectionclassid);
    
  }
}
