// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AdminLoginComponent } from './admin-login/admin-login.component';
// import { ParentAdminComponent } from './parent-admin.component';
// import { AdminRoutingModule } from './admin-routing.module';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

// import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
// import { AdminService } from './admin.service';
// import { Validation } from '../Shared/Validator';


// @NgModule({
//   imports: [
//     CommonModule,
//     AdminRoutingModule,
//     FormsModule,
//     ReactiveFormsModule, HttpModule, HttpClientModule,
//   ],
//   declarations: [AdminLoginComponent, ParentAdminComponent],
//   providers: [AdminService,Validation]
// })
// export class AdminModule { }



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ParentAdminComponent } from './parent-admin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { Validation } from '../Shared/Validator';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GlobalApi } from '../shared/global-api';
import { HelperC } from '../shared/helper-cs';
import { AuthGuard } from '../AuthGuard/auth.guard';
@NgModule({
    imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule,
        HttpModule, HttpClientModule, NgxSpinnerModule],
    declarations: [ParentAdminComponent, AdminLoginComponent],
    providers: [AdminService, Validation,GlobalApi,HelperC,AuthGuard]
})
export class AdminModule { }
