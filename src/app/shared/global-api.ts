
import { Component, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';


@Injectable()

export class GlobalApi {

  // Stings For Admin Api's
  public domain = 'http://localhost:5001/';

  reqHeader = new HttpHeaders({ 'No-Auth': 'True' });

  // Http Generic Headers for everyone
  // single student
  public headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  // token
  debugger;
  public AuthenticateAdmin: string = this.domain + 'api/Token/Create';
  public GetUserClaims: string = this.domain + 'api/GetUserClaims';

  // student
  public SingleStudentRegister: string = this.domain + 'api/createStudent';
  public GetSingleStudentList: string = this.domain + 'api/getallStudents?SchoolOrganizationID=4';
  public GetSingleStudent: string = this.domain + 'api/Student/GetSingleStudent';
  public UpdateSingleStudent: string = this.domain + 'api/Student/UpdateStudent';
  public DeleteSingleStudent: string = this.domain + 'api/Student/DeleteSingleStudent';

  // class and section
  public AddClassAndSection: string = this.domain + 'api/createClassSection';
  public GetClassList: string = this.domain + 'api/getAllClassSections?SchoolOrganizationID=4';
  public UpdateClassAndSection: string = this.domain + 'api/Class/UpdateClassAndSection';
  public GetClass: string = this.domain + 'api/Class/GetClass';
  public DeleteClassAndSection: string = this.domain + 'api/Class/DeleteClassAndSection';


  // teacher
  public RegisterTeacher: string = this.domain + 'api/createStaff';
  public GetTeachers: string = this.domain + 'api/getAllStaff?SchoolOrganizationID=4';
  public UpdateTeacher: string = this.domain + 'api/Teacher/UpdateTeacher';
  public GetTeacher: string = this.domain + 'api/Class/GetClass';
  public DeleteTeacher: string = this.domain + 'api/Teacher/DeleteTeacher';

  // subject
  public AddSubject: string = this.domain + 'api/createSubjects';
  public GetSubjects: string = this.domain + 'api/getAllSubjects?SchoolOrganizationID=4';
  public UpdateSubject: string = this.domain + 'api/Subject/UpdateSubject';
  public GetSubject: string = this.domain + 'api/Subject/GetSubject';
  public DeleteSubject: string = this.domain + 'api/Subject/DeleteSubject';

  // Assign Subject Teacher to Class
  public AssignSubjectTeachertoClass: string = this.domain + 'api/Class/AssignSubjectTeachertoClass';
  public GetAllAssignSubjectTeacher: string = this.domain + 'api/Class/GetAllAssignSubjectTeacher';
  public UpdateAssignSubjectTeachertoClass: string = this.domain + 'api/Class/UpdateAssignSubjectTeachertoClass';
  public DeleteAssignSubjectTeachertoClass: string = this.domain + 'api/Class/DeleteAssignSubjectTeachertoClass';


  ///// multistudent
  public MultiStudentRegister: string = this.domain + 'api/Student/RegisterMultiStudents';
  public DeleteStudent: string = this.domain + 'api/Student/DeleteSelectedStudent';

  //// fee
  public InsertCourse: string = this.domain + 'api/createCourse';
  public getclass: string = this.domain + 'api/Class/getclassdetails';
  public getsection: string = this.domain + 'api/Class/getsectiondetails';
  public getcourse: string = this.domain + 'api/Course/getcoursedetails';
  public Insertfeeamount: string = this.domain + 'api/fee/savefeeamountdetails';
  public deletefeeamount: string = this.domain + 'api/fee/removefeeamountdetails';
  public deleteaddcourse: string = this.domain + 'api/fee/removeaddcoursedetails';
  public getaddcourselistdetails: string = this.domain + 'api/fee/getaddcoursedetailslist';
  public getaddfeeamountlistdetails: string = this.domain + 'api/fee/getaddfeeamountdetailslist';
  public getconcessionlistdetails: string = this.domain + 'api/fee/getconcessiondetailslist';
  public getaddcourse: string = this.domain + 'api/fee/getconcessiondetailslist';
  public UpdateCourse: string = this.domain + 'api/Course/updatecoursedetails';
  public updatefeeamount: string = this.domain + 'api/fee/updatefeeamountdetails';
  public insertstudentconcession: string = this.domain + 'api/concession/saveprovidedconcessiondetails';
  public updateconcession: string = this.domain + 'api/concession/updateconcession';
  public removeconcession: string = this.domain + 'api/concession/removeconcessiondetails';
  public getconcessionrecord: string = this.domain + 'api/concession/getconcessionrecord';

  //////// Installments

  public RemoveInstallmentdetails: string = this.domain + 'api/Installments/removefeeamountdetails';
  public getInstallmentlistdetails: string = this.domain + 'api/Installments/getconcessiondetailslist';
  public updateInstallmentdetails: string = this.domain + 'api/Installments/updatecoursedetails';
  public insertInstallmentdetails: string = this.domain + 'api/Installments/saveprovidedconcessiondetails';

  /// transport

  /// driver
  public savedriver: string = this.domain + 'api/createDriver';
  public getdriverlist: string = this.domain + 'api/getAllDrivers?SchoolOrganizationID=4';
  public GetSingleDriver: string = this.domain + 'api/Transport/getsingledriverdetails';
  public UpdateSingleDriver: string = this.domain + 'api/Transport/updatedriverdetails';
  public DeleteDriver: string = this.domain + 'api/Transport/removedriverdetails';

  //// route
  public saveroute: string = this.domain + 'api/Transport/insertroutedetails';
  public updatedriverroute: string = this.domain + 'api/Transport/updateroutedetails';
  public getdriverdd: string = this.domain + 'api/Transport/getdriverdd';


  // holiday

  public RegisterHoliday: string = this.domain + 'api/Teacher/RegisterHoliday';
  public GetHolidays: string = this.domain + 'api/Teacher/GetHolidays';
  public UpdateHoliday: string = this.domain + 'api/Teacher/UpdateHoliday';
  public GetHoliday: string = this.domain + 'api/Class/GetHoliday';
  public DeleteHoliday: string = this.domain + 'api/Teacher/DeleteHoliday';

  // Day Attendamce Reports
  public SaveDayAttendanceReport: string = this.domain + 'api/Attendance/SaveDayAttendanceReport';
  public UpdateDayAttendanceReport: string = this.domain + 'api/Attendance/UpdateDayAttendanceReport';

  // Month Attendance Reports
  public SaveMonthAttendanceReport: string = this.domain + 'api/Attendance/SaveMonthAttendanceReport';
  // View Attendance
  public GenarateMonthAttendanceReport: string = this.domain + 'api/Attendance/GenarateMonthAttendanceReport';


  // School
  public RegisterSchool: string = this.domain + 'api/School/RegisterSchool';

  // Active School

  public GetActiveSchoolList: string = this.domain + 'api/School/GetActiveSchoolList';
  public DeleteActiveSchool: string = this.domain + 'api/School/DeleteActiveSchool';
  public UpdateActiveSchool: string = this.domain + 'api/School/UpdateActiveSchool';

  // InActive School
  public GetInActiveSchoolList: string = this.domain + 'api/School/GetInActiveSchoolList';
  public DeleteInActiveSchool: string = this.domain + 'api/School/DeleteInActiveSchool';
  public UpdateInActiveSchool: string = this.domain + 'api/School/UpdateInActiveSchool';


  // Trail School
  public GetTrailSchoolList: string = this.domain + 'api/School/GetTrailSchoolList';
  public DeleteTrailSchool: string = this.domain + 'api/School/DeleteTrailSchool';
  public UpdateTrailSchool: string = this.domain + 'api/School/UpdateTrailSchool';

  // Reached Admin
  public GetAdminsList: string = this.domain + 'api/Admin/GetAdminsList';
  public RegisterAdmin: string = this.domain + 'api/Admin/RegisterAdmin';
  public UpdateAdmin: string = this.domain + 'api/Admin/UpdateAdmin';
  public DeleteAdmin: string = this.domain + 'api/Admin/DeleteAdmin';


  //// communication
  public SaveMessage: string = this.domain + 'api/Communication/insertcomposedmessage';
  public getstudentnamebyclassandsection: string = this.domain + 'api/Communication/getstudentnamebyclassandsection';
  public RetrieveCommunicationList: string = this.domain + 'api/Communication/RetrieveCommunicationList';
  public Updatecomposedmessage: string = this.domain + 'api/Communication/Updatecomposedmessage';
  public RemoveCommunication: string = this.domain + 'api/Communication/RemoveCommunication';
  //////// Exam

  public saveExam: string = this.domain + 'api/Exam/insertexamdetails';
  public GetExamList: string = this.domain + 'api/Exam/getexamdetails';
  public GetSingleExamRecord: string = this.domain + 'api/Exam/getsingleexamdetails';
  public UpdateExam: string = this.domain + 'api/Exam/updateexamdetails';
  public DeleteExam: string = this.domain + 'api/Exam/removeexamdetails';
  public getfeeamountdd: string = this.domain + 'api/Exam/getfeeamountdd';

  ///// Grade

  public saveGrade: string = this.domain + 'api/Grade/insertgradedetails';
  public GetgradeList: string = this.domain + 'api/Grade/getgradedetails';
  public GetSinglegradeRecord: string = this.domain + 'api/Grade/getsinglegradedetails';
  public Updategrade: string = this.domain + 'api/Grade/updategradedetails';
  public Deletegrade: string = this.domain + 'api/Grade/removegradedetails';


  //// marks

  public getsubjectdd: string = this.domain + 'api/Marks/GetSubjectDD';
  public savemarks: string = this.domain + 'api/Marks/insertmarksdetails';
  public GetMarksList: string = this.domain + 'api/Marks/getmarksdetails';
  public GetSingleMarksRecord: string = this.domain + 'api/Marks/getsinglemarksdetails';
  public UpdateMarks: string = this.domain + 'api/Marks/updatemarksdetails';
  public DeleteMarks: string = this.domain + 'api/Marks/removemarksdetails';
  public GetStudentRecordsList: string = this.domain + 'api/Marks/studentlistdetails';

  /////////// promotions

  public insertquestionPromotions: string = this.domain + 'api/Promotions/insertPromotionsdetails';
  public getquestionpomotionslist: string = this.domain + 'api/Promotions/getPromotionsdetails';
  public updatequestionPromotions: string = this.domain + 'api/Promotions/updatePromotionsdetails';
  public removequestionpomotions: string = this.domain + 'api/Promotions/removePromotionsdetails';

  /////////// promotions

  public insertUploadPics: string = this.domain + 'api/Promotions/insertUploadPics';
  public getUploadPicslist: string = this.domain + 'api/Promotions/getUploadPicslist';
  public updateUploadPics: string = this.domain + 'api/Promotions/updateUploadPics';
  public removeUploadPics: string = this.domain + 'api/Promotions/removeUploadPics';

  ////// schedule Exam

  public insertscheduleexamdetails: string = this.domain + 'api/ScheduleExam/insertscheduleexamdetails';
  public getScheduleExamlistdetails: string = this.domain + 'api/ScheduleExam/getScheduleExamlistdetails';
  public updatescheduleexamdetails: string = this.domain + 'api/ScheduleExam/updatescheduleexamdetails';
  public RemoveScheduleExamdetails: string = this.domain + 'api/ScheduleExam/RemoveScheduleExamdetails';


  //////////////
  public getExamReportsListdetails: string = this.domain + 'api/ExamReport/getExamReportsListdetails';


  // Expenditure

  public Insertexpenditure: string = this.domain + 'api/Expenditure/saveexpenditure';
  public getexpenditurelistdetails: string = this.domain + 'api/Expenditure/GetExpenditureList';
  public updateexpenditure: string = this.domain + 'api/Expenditure/UpdateExpenditureRecord';
  public getexpenditurerecord: string = this.domain + 'api/Expenditure/GetExpenditureRecord';
  public deleteexpenditureamount: string = this.domain + 'api/Expenditure/DeleteExpenditureRecord';

  ////// new payment

  public insertnewpayment: string = this.domain + 'api/Expenditure/insertnewpayment';
  public RetrieveNewPaymentList: string = this.domain + 'api/Expenditure/RetrieveNewPaymentList';
  public updatenewpayment: string = this.domain + 'api/Expenditure/updatenewpayment';
  public GetnewpaymentRecord: string = this.domain + 'api/Expenditure/GetnewpaymentRecord';
  public DeletenewpaymentRecord: string = this.domain + 'api/Expenditure/DeletenewpaymentRecord';


    ////// balance payment

    public insertbalancepayment: string = this.domain + 'api/Expenditure/insertbalancepayment';
    public RetrieveBalancePaymentlist: string = this.domain + 'api/Expenditure/RetrieveBalancePaymentlist';
    public updatebalancepayment: string = this.domain + 'api/Expenditure/updatebalancepayment';
    public GetBalancePaymentRecord: string = this.domain + 'api/Expenditure/GetBalancePaymentRecord';
    public DeleteBalancePaymentRecord: string = this.domain + 'api/Expenditure/DeleteBalancePaymentRecord';

    public RetrieveCategoryDD: string = this.domain + 'api/Expenditure/RetrieveCategoryDD';


}
