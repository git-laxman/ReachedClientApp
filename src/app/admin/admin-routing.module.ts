import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ParentAdminComponent } from './parent-admin.component';
import { AuthGuard } from '../AuthGuard/auth.guard';


const routes: Routes = [
  {
    path: '', component: ParentAdminComponent,
    children: [
      { path: '', component: AdminLoginComponent },
    ]
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})


export class AdminRoutingModule { }
