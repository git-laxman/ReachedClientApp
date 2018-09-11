import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { TransportationRoutingModule } from './transportation-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validation } from '../Shared/Validator';
import { GlobalApi } from '../shared/global-api';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { TransportationService } from './transportation.service';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule, TransportationRoutingModule, FormsModule,
    ReactiveFormsModule,
    HttpClientModule, ModalModule.forRoot(), DragulaModule
  ],
  declarations: [AddDriverComponent, AddRouteComponent],
  providers: [Validation, GlobalApi, TransportationService]
})
export class TransportationModule { }
