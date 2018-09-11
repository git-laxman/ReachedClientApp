
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';

import { CustomOption } from './shared/toastr/custom-option';

import * as $ from 'jquery';
import { CommonModule } from '@angular/common';


import { ToastrModule } from 'ngx-toastr';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AuthGuard } from './AuthGuard/auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        // DashboardComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        ToastModule.forRoot(),
        NgbModule.forRoot(), BsDatepickerModule.forRoot(),
        ToastrModule.forRoot(),
        NgMultiSelectDropDownModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyA1lNunzW24friwO24FkQqfY9j_lP9GWGY'
        })
    ],
    providers: [
        // Toastr providers
        { provide: ToastOptions, useClass: CustomOption },AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
