import { Component, OnInit } from '@angular/core';
import { Subject } from '../../Common/Subject';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { TimetableService } from '../timetable.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  public subjectform:FormGroup;
  subject:Subject= new Subject(); 
  displaysubject:boolean;
  CrateSubjectButton:boolean=true;
  response:any;
  subjectlist=[];
  constructor(private fb: FormBuilder, private Valid: Validation,private service:TimetableService,private toastr: ToastrService) { }


  ngOnInit() {
    this.subjectform=this.fb.group({
      SubjectName:this.Valid.signupform.Required,
    });
    this.GetSubjects();
    
  }

  AddSubject()
  {
   
    if(this.subject.SubjectID == null)
    {
      debugger;
    this.service.AddSubject(this.subject).subscribe(data =>
     {
       debugger;
      this.response = data;
    this.GetSubjects();
     
      this.toastr.success('Subject', 'Sucessfully Added!');
    }, error =>{
     
      // this.toastr.error('Subject', 'Failed Added!');
    }
    )
  }
  else
  {
    this.service.UpdateSubject(this.subject).subscribe(data =>
      {
       this.response = data;
    this.GetSubjects();
      
     }, error =>{
      
     }
     )
  }
 }

 GetSubjects()
 {
 
  this.service.GetSubjects().subscribe((data: any[]) => {
    debugger
    this.subjectlist = data;
   
  }, error => {

    }
  );
 }

DeleteSubject(id)
{
  
  this.service.DeleteSubject(id).subscribe(data =>
   {
    this.response = data;
  this.GetSubjects();
   
    this.toastr.success('Subject', 'Sucessfully Deleted!');
  }, error =>{
   
    // this.toastr.error('Subject', 'Failed Deleted!');
  }
  )
}


//opening subject create form
 CreateSubject()
 {
   this.displaysubject=true;
   this.CrateSubjectButton=false;
 }
 //closing subject create from
 Cancel()
 {
   this.displaysubject=false;
   this.CrateSubjectButton=true;
   
 }

}
