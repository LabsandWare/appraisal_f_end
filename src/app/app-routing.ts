import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AuthGuard } from './services/auth.guard';

export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent  },
  { path: 'employee/:id',      component: AppraisalComponent },
  { path: 'supervisor/:id',      component: AppraisalComponent },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(mod => mod.AdminLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];