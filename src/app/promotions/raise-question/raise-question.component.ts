import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Validation } from '../../Shared/Validator';
import { Course } from '../../Common/Course';
import { PromotionsService } from '../promotions.service';
import { ToastrService } from 'ngx-toastr';
import { Class } from '../../Common/Class';
import { dropDown } from '../../Common/dropdown';
import { QuestionPromotions, UploadPromotions } from '../../Common/promotions';

@Component({
  selector: 'app-raise-question',
  templateUrl: './raise-question.component.html',
  styleUrls: ['./raise-question.component.scss']
})
export class RaiseQuestionComponent implements OnInit {

  question: QuestionPromotions = new QuestionPromotions();
  upload: UploadPromotions = new UploadPromotions();
  public response: any;
  public questionPromotionsForm: FormGroup;
  classdd: dropDown[] = [];
  coursedd: dropDown[] = [];
  DisplayAddquestionPromotionsForm: boolean;
  addfeeaomuntlist = [];
  DisplayParticularclassorsection: boolean;
  DisplayQuestionPromotionsForm: boolean;
  constructor(private fb: FormBuilder, private Valid: Validation,
    private service: PromotionsService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.questionPromotionsForm = this.fb.group({
      ClassName: this.Valid.signupform.ClassName,
      SectionName: this.Valid.signupform.SectionName,
      Question: this.Valid.signupform.Required,
      Answer1: this.Valid.signupform.Required,
      Answer2: this.Valid.signupform.Required,
      Answer3: this.Valid.signupform.Required,
      Answer4: this.Valid.signupform.Required,
      Particularclassorsection: [],
      All: [],
      SendTo: []
    });
    this.RetrieveClass();
    this.RetieveQuestionPromotionsList();
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

  SavequestionPromotions() {
    if (this.upload.UploadID === null) {
      this.service.insertquestionPromotions(this.question).subscribe(data => {
        this.response = data;
        this.toastr.success('Question Promotions', 'Sucessfully saved!');
        this.RetieveQuestionPromotionsList();
      }, error => {

        // this.toastr.error('Question Promotions', 'Failed saved!');
      }
      );
    } else {
      this.service.updatequestionPromotions(this.question).subscribe(data => {
        this.response = data;
        this.toastr.success('Question Promotions', 'Sucessfully saved!');
        this.RetieveQuestionPromotionsList();
      }, error => {

        // this.toastr.error('Question Promotions', 'Failed saved!');
      }
      );
    }

  }

  Deletequestions() {
    this.service.removequestionpomotions(this.question).subscribe(data => {
      this.response = data;
      this.toastr.success('question', 'Deleted saved!');
    }, error => {

      // this.toastr.error('question', 'Deleted saved!');
    }
    );
  }

  RetieveQuestionPromotionsList() {
    this.service.getquestionpomotionslist().subscribe((data: any[]) => {
      this.addfeeaomuntlist = data;
      // this.toastr.success('Fee Amount', 'Deleted Successfully!');
    }, error => {

      // // this.toastr.error('Add Course', 'Deleted Failed!');
    }
    );
  }
  CreateQuestionPromotions() {
    this.DisplayQuestionPromotionsForm = true;
  }

  Cancel() {
    this.DisplayQuestionPromotionsForm = false;
  }

  Editquestions(data) {
    this.question = data;
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
