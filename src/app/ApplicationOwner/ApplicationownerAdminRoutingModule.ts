import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationowneradminloginComponent } from './applicationownerdminlogin/applicationowneradminlogin.component';
import { ParentapplicationowneradminComponent } from './parentapplicationowneradmin.component';
import { ApplicationOwnerAdminService } from './applicationowneradmin.service';
import { Validation } from '../Shared/Validator';


const routes: Routes = [
{ path: '', component: ParentapplicationowneradminComponent,
children:[
{path:'',component:ApplicationowneradminloginComponent}]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ApplicationOwnerAdminService,Validation]
})


export class ApplicationownerAdminRoutingModule { }
