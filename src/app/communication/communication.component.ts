import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../Shared/Validator';
import { Communication } from '../Common/communication';
import { CommunicationService } from './communication.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { dropDown } from '../Common/dropdown';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  communication: Communication = new Communication();
  public response: any;
  public communicationform: FormGroup;
  public editstudentdata: any;
  classdd: dropDown[] = [];
  StudentList = [];
  displaycommunicationform: boolean;
  DisplayIndividualstudent = false;
  DisplayParticularclassorsection = false;
  DisplayScheduleDate = false;
  CommunicationList = [];
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: CommunicationService, private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.communicationform = this.fb.group({
      message: this.Valid.signupform.Required,
      SMS: [],
      Mail: [],
      AppNotification: [],
      ClassName: [],
      Individualstudent: [],
      Particularclassorsection: [],
      All: [],
      SectionName: [],
      SendImmediately: [],
      Schedule: [],
      StudentName: [],
      SendToMode: []
    });
    this.RetrieveClass();
    this.RetieveCommunicationList();
    this.RetrieveStudentList();
  }

  RetrieveClass() {
    this.classdd = this.service.RetrieveClassDetails();
    // .subscribe((data: any[]) => {
    //   this.classdd = data;
    //   this.toastr.success('Class', 'Retrieved Sucessfully!');
    // }, error => {

    //   // this.toastr.error('Class', 'Retrieved Failed!');
    // }
    // );
  }

  setradio(e: string) {
    if (e === 'Individualstudent') {
      this.DisplayIndividualstudent = true;
      this.DisplayParticularclassorsection = false;

    } else {
      this.DisplayIndividualstudent = false;
      this.DisplayParticularclassorsection = true;
    }
  }

  setradioAll(e: string) {
    if (e === 'All') {
      this.DisplayIndividualstudent = false;
      this.DisplayParticularclassorsection = false;
    }
  }

  setradio1(e: string) {
    if (e === 'Schedule') {
      this.DisplayScheduleDate = true;

    } else {
      this.DisplayScheduleDate = false;
    }
  }

  setradio2(e: string) {
    if (e === 'SendImmediately') {
      this.DisplayScheduleDate = false;
    }
  }

  RetieveCommunicationList() {
    this.service.RetrieveCommunicationList().subscribe((data: any) => {
      this.CommunicationList = data;
      this.toastr.success('Communication List', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Communication List', 'Retrieved Failed!');
    }
    );
  }

  RetrieveStudentList() {
    this.service.RetrieveStudentbyclassandsection(this.communication).subscribe((data: any) => {
      this.CommunicationList = data;
      this.toastr.success('Student List', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Student List', 'Retrieved Failed!');
    }
    );
  }


  sendCommunication() {
    if (this.communication.CommunicationID == null) {
      this.service.savecomposedmessage(this.communication).subscribe(data => {
        this.response = data;
        this.toastr.success('Message', 'Sucessfully Saved!');
      }, error => {
        // this.toastr.error('Message', 'Failed Saved!');
      }
      );
    } else {
      this.service.Updatecomposedmessage(this.communication).subscribe(data => {
        this.response = data;
        this.toastr.success('Message', 'Sucessfully Saved!');
      }, error => {
        // this.toastr.error('Message', 'Failed Saved!');
      }
      );
    }

  }

  Createcommunication() {
    this.displaycommunicationform = true;
  }

  DeleteCommunication(id) {
    this.service.RemoveCommunication(id).subscribe(data => {
      this.response = data;
      this.RetieveCommunicationList();
      this.toastr.success('Communication', 'Sucessfully Deleted!');
    }, error => {

      // this.toastr.error('Communication', 'Failed Deleted!');
    }
    );

  }
  Editcommunication(data) {
    this.communication = data;
  }
  Deletecommunication() {
    this.displaycommunicationform = true;
  }
  Cancel() {
    this.displaycommunicationform = false;
  }


}
