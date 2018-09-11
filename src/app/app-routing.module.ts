import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';

import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';
import { SuperAdmin_Full_ROUTES } from './shared/routes/superadmin-full-layout.routes';
import { ApplicationownerAdmin_Full_ROUTES } from './shared/routes/applicationowneradmin-full-layout.routes';
import { AuthGuard } from './AuthGuard/auth.guard';

const appRoutes: Routes = [

  { path: '', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'admin', component: FullLayoutComponent, data: { title: 'full Views' },children: Full_ROUTES },
  { path: 'superadmin', component: FullLayoutComponent, data: { title: 'full superadmin views' }, children: SuperAdmin_Full_ROUTES },
  { path: 'applicationowneradmin', component: FullLayoutComponent, data: { title: 'full applicationowneradmin views' }, children: ApplicationownerAdmin_Full_ROUTES }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
