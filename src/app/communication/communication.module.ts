import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './communication.component';
import { CommunicationRoutingModule } from './communication-routing.module';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validation } from '../Shared/Validator';
import { CommunicationService } from './communication.service';
import { GlobalApi } from '../shared/global-api';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [CommunicationComponent],
  providers: [Validation, GlobalApi, CommunicationService]
})

export class CommunicationModule { }
