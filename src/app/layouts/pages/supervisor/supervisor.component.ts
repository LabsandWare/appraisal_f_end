import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';   

import { Staff } from '../../../model/staff.model';
import { StaffsService } from '../../../services/staffs.service';

@Component({
  selector: 'app-supervisor',
  template: `
    <div class="card card-user">
      <div class="card-header">
        <h5 class="card-title">ADD SUPERVISOR</h5>
      </div>
      <div class="card-body">
        <form #supervisorForm="ngForm" (ngSubmit)="create()">
          <div class="row">
            <div class="col-md-6 pr-1">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name" name="fname" [(ngModel)]="staff.fname">
              </div>
            </div>
            <div class="col-md-6 pl-1">
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" name="lname" [(ngModel)]="staff.lname">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="user@example.com" name="email" [(ngModel)]="staff.email">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="update ml-auto mr-auto">
              <button type="submit" class="btn btn-primary btn-round">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class SupervisorComponent implements OnInit {

  staff  = new Staff;

  constructor(private staffsService: StaffsService,
    public dialog: MatDialog,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  create() {
    this.staffsService.createSupervisor(this.staff)
      .subscribe((res: any) => {
        if (res.status === false) {
          this.toastr.error(
            'Failed to create Employee',
            'Add error',
            {
              timeOut: 5000,
              positionClass: 'toast-top-center'
            }
          );
        } else {
          this.toastr.success('Created!!!', 'Successfuly Added!', {
            timeOut: 5000,
            positionClass: 'toast-top-center'
          });
        }
        this.dialog.closeAll()
      });
  }
  
}
