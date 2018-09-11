import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Class } from '../../Common/Class';
import { Validation } from '../../Shared/Validator';
import { TimetableService } from '../timetable.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  public classform:FormGroup;
  class:Class= new Class();
  response:any;
  classlist=[];
  displayclass:boolean;
  CreateClassButton:boolean=true;
  constructor(private fb: FormBuilder, private Valid: Validation,private service:TimetableService,private toastr: ToastrService) { }


  ngOnInit() {
    this.classform=this.fb.group({
      ClassName:this.Valid.signupform.Required,
      SectionName:this.Valid.signupform.Required
    
    });
    this.GetClassList();
  }
//Add and Update class
AddClassAndSection()
{
 
  if(this.class.ClassID == null)
  {
    debugger;
  this.service.AddClassAndSection(this.class).subscribe(data =>
   {

    debugger;

    this.response = data;
    this.GetClassList();
   
    this.toastr.success('Class & Section', 'Sucessfully Added!');
  }, error =>{
   
    // this.toastr.error('Class & Section', 'Failed Added!');
    this.GetClassList();
  }
  )
}
else
{
  this.service.UpdateClassAndSection(this.class).subscribe(data =>
    {
     this.response = data;
   }, error =>{
    
   }
   )
}
}
//Get classes
GetClassList() {
 
  this.service.GetClassList().subscribe((data: any[]) => {
    debugger;
    this.classlist = data;
   
  }, error => {

    }
  );
}
DeleteClass(id)
{
  this.service.DeleteClassAndSection(id).subscribe(data =>
    {
     this.response = data;
     this.GetClassList();
    
     this.toastr.success('Class & Section', 'Sucessfully Deleted!');
   }, error =>{
    
     // this.toastr.error('Class & Section', 'Failed Deleted!');
     this.GetClassList();
   }
   )
}

//Edit class
EditClass(classdata)
{
this.class=classdata;
}

CreateClass()
{
  this.displayclass=true;
  this.CreateClassButton=false;
}
Cancel()
{
  this.displayclass=false;
  this.CreateClassButton=true;
  
}
}
