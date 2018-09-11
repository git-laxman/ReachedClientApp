import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

export const SuperAdmin_Full_ROUTES: Routes = [

  // Routes
  {
    path: 'school',
    loadChildren: './school/school.module#SchoolModule'
  },
  {
    path: 'reachedadmins',
    loadChildren: './reached-admins/reached-admins.module#ReachedAdminsModule'
  }
];
