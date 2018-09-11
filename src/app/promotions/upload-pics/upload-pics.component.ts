import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { Course } from '../../Common/Course';
import { PromotionsService } from '../promotions.service';
import { ToastrService } from 'ngx-toastr';
import { Class } from '../../Common/Class';
import { dropDown } from '../../Common/dropdown';
import { QuestionPromotions, UploadPromotions } from '../../Common/promotions';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-pics',
  templateUrl: './upload-pics.component.html',
  styleUrls: ['./upload-pics.component.scss']
})
export class UploadPicsComponent implements OnInit {

  upload: UploadPromotions = new UploadPromotions();
  public response: any;
  public questionPromotionsForm: FormGroup;
  classdd: dropDown[] = [];
  DisplayquestionPromotionsForm: boolean;
  uploadlist = [];
  DisplayParticularclassorsection: boolean;
  base64Image: string;

  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: PromotionsService, private _sanitizer: DomSanitizer,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.questionPromotionsForm = this.fb.group({
      ClassName: this.Valid.signupform.ClassName,
      SectionName: this.Valid.signupform.SectionName,
      filename: this.Valid.signupform.Required,
      Particularclassorsection: [],
      All: [],
      SendTo: []
    });
    this.RetrieveClass();
    this.RetieveUploadPicsList();
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.base64Image = myReader.result;
    };
    myReader.readAsDataURL(file);
  }

  GetImage(img) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(img);
  }

  RetrieveClass() {
    this.service.RetrieveClassDetails().subscribe((data: any[]) => {
      this.classdd = data;
      this.toastr.success('Class', 'Sucessfully Registered!');
    }, error => {

      // this.toastr.error('Class', 'Failed Registered!');
    }
    );
  }

  SaveUploadPics() {
    if (this.upload.UploadID === null) {
      this.upload.filename = this.base64Image;
      this.service.insertUploadPics(this.upload).subscribe(data => {
        this.response = data;
        this.toastr.success('upload', 'Sucessfully saved!');
        this.RetieveUploadPicsList();
      }, error => {

        // this.toastr.error('upload', 'Failed saved!');
      }
      );
    } else {
      this.upload.filename = this.base64Image;
      this.service.updateUploadPics(this.upload).subscribe(data => {
        this.response = data;
        this.toastr.success('Question Promotions', 'Sucessfully saved!');
        this.RetieveUploadPicsList();
      }, error => {
        // this.toastr.error('Question Promotions', 'Failed saved!');
      }
      );
    }

  }

  Deleteupload() {
    this.service.removeUploadPics(this.upload).subscribe(data => {
      this.response = data;
      this.toastr.success('question', 'Deleted saved!');
    }, error => {
      // this.toastr.error('question', 'Deleted saved!');
    }
    );
  }

  RetieveUploadPicsList() {
    this.service.getUploadPicslist().subscribe((data: any[]) => {
      this.uploadlist = data;
      // this.toastr.success('Fee Amount', 'Deleted Successfully!');
    }, error => {

      // // this.toastr.error('Add Course', 'Deleted Failed!');
    }
    );
  }
  CreateUploadPics() {
    this.DisplayquestionPromotionsForm = true;
  }

  Cancel() {
    this.DisplayquestionPromotionsForm = false;
  }

  Editupload(data) {
    this.upload = data;
  }

  setradio(e: string) {
    if (e === 'Particularclassorsection') {
      this.DisplayParticularclassorsection = true;
    } else {
      this.DisplayParticularclassorsection = false;
    }
  }

  setradioAll(e: string) {
    if (e === 'All') {
      this.DisplayParticularclassorsection = false;
    }
  }

}
