import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperadminloginComponent } from './superadminlogin/superadminlogin.component';
import { ParentsuperadminComponent } from './parentsuperadmin.component';
import { SuperAdminService } from './superadmin.service';
import { Validation } from '../Shared/Validator';


const routes: Routes = [
{ path: '', component: ParentsuperadminComponent,
children:[
{path:'',component:SuperadminloginComponent}]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [SuperAdminService,Validation]
})


export class SuperAdminRoutingModule { }
