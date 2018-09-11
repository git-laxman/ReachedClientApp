import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { FeeService } from '../fee.service';
import { ToastrService } from 'ngx-toastr';
import { dropDown } from '../../Common/dropdown';
import { Concession, ClassSearch } from '../../Common/concession';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-concession',
  templateUrl: './concession.component.html',
  styleUrls: ['./concession.component.scss']
})
export class ConcessionComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('concessionmodal') concessionmodal;
  newclasssearch: ClassSearch = new ClassSearch();
  concessionsearch: Concession = new Concession();
  public response: any;
  public concessionform: FormGroup;
  public studentconcessionform: FormGroup;
  classdd: dropDown[] = [];
  sectiondd: dropDown[] = [];
  concessionlist = [];
  DisplayConcessionForm: boolean;
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: FeeService, private modalService: BsModalService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.concessionform = this.fb.group({
      SectionName: this.Valid.signupform.SectionName,
      ClassName: this.Valid.signupform.ClassName,
    });
    this.studentconcessionform = this.fb.group({
      SectionName: this.Valid.signupform.SectionName,
      ClassName: this.Valid.signupform.ClassName,
    });
    this.RetrieveClass();
    this.retrievesection();
  }

  RetrieveClass() {
    this.service.RetrieveClassDetails().subscribe((data: any[]) => {
      this.classdd = data;
      this.toastr.success('Class', 'Retrieved Sucessfully!');
    }, error => {

      // this.toastr.error('Class', 'Retrieved Failed!');
    }
    );
  }

  retrievesection() {
    this.service.RetrieveSectionDetails().subscribe((data: any[]) => {
      this.sectiondd = data;
      this.toastr.success('Section', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Section', 'Retrieved Failed!');
    }
    );
  }

  onchangesection(obj) {
    this.DisplayConcessionForm = true;
    this.retrieveconcessionlist(obj);
  }

  saveindividualstudentconcession() {
    if (this.concessionsearch.ConcessionID == null) {
      this.service.insertafterconcession(this.concessionsearch).subscribe(data => {
        // this.retrieveconcessionlist();
        // this.toastr.error('Concession', 'Provided Successfully!');
      }, error => {
        // this.toastr.error('Concession', 'Provided Failed!');
      }
      );
    } else {
      this.service.updateconcession(this.concessionsearch).subscribe(data => {
        // this.retrieveconcessionlist();
        // this.toastr.error('Concession', 'Updated Successfully!');
      }, error => {
        // this.toastr.error('Concession', 'Updated Failed!');
      }
      );
    }

  }

  retrieveconcessionlist(concession) {
    this.service.getconcessionlist(concession).subscribe((data: any) => {
      this.concessionlist = data;
      this.toastr.success('Section', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Section', 'Retrieved Failed!');
    }
    );
  }


  openConcessionmodel(template: TemplateRef<any>, ConcessionID) {
    this.modalRef = this.modalService.show(template);
    this.retrieveSingleConcession(ConcessionID);
  }

  Deleteconcession(ConcessionID) {
    this.service.removeconcession(ConcessionID).subscribe(data => {
      // this.retrieveconcessionlist();
      // this.toastr.error('Concession', 'Deleted Successfully!');
    }, error => {
      // this.toastr.error('Concession', 'Deleted Failed!');
    }
    );
  }

  retrieveSingleConcession(concessionID) {
    this.service.getconcessionrecord(concessionID).subscribe((data: any) => {
      this.concessionsearch = data;
      this.toastr.success('Section', 'Retrieved Sucessfully!');
    }, error => {
      // this.toastr.error('Section', 'Retrieved Failed!');
    }
    );
  }




}
