import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  user = new User;

  constructor(private auth: AuthService,
    private toastr: ToastrService ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.signup(this.user)
      .subscribe((res: any) => {
        if (res.status == false) {
          this.toastr.error('Please try again', 'Sign up error', {
            timeOut: 5000,
            positionClass: 'toast-top-center'
          });
        } else {
          this.toastr.success(
            'Login to continue.',
            'Success, You have signed up.',
            {
              timeOut: 5000,
              positionClass: 'toast-top-center'
            });
        }
      })
  }

}
