import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminloginComponent } from './superadminlogin/superadminlogin.component';
import { ParentsuperadminComponent } from './parentsuperadmin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SuperAdminRoutingModule } from './SuperAdminRoutingModule';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule ,
    SuperAdminRoutingModule,
    ReactiveFormsModule,
    HttpModule,HttpClientModule,
    NgxSpinnerModule
  ],
  declarations: [SuperadminloginComponent, ParentsuperadminComponent]
})
export class SuperadminModule { }
