import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { SupervisorComponent } from '../supervisor/supervisor.component';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    employee: any;
    supervisor: any;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {
      this.employee = EmployeeComponent;
      this.supervisor = SupervisorComponent;

    }

    openDialog(dialog: any): void {
      const dialogRef = this.dialog.open(dialog, {
        width: '50%',
      });
    }
}
