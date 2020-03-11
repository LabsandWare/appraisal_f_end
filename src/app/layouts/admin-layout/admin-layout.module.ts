import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UserComponent } from '../pages/user/user.component';
import { SupervisorComponent } from '../pages/supervisor/supervisor.component';
import { EmployeeComponent } from '../pages/employee/employee.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    SupervisorComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class AdminLayoutModule { }
