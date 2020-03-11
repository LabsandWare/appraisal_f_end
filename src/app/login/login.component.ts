import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';                                                                                                                                                                                                                                                                                     

import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User;

  constructor( private auth: AuthService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.user)
      .subscribe((res: any) => {
        if (res.status === false) {
          this.toastr.error(
            'Please enter valid credentials',
            'Login error',
            {
              timeOut: 5000,
              positionClass: 'toast-top-center'
            }
          );
        } else {
          localStorage.setItem('access_token', res.apikey);
          this.toastr.success('You are now logged in', 'Welcome!', {
            timeOut: 5000,
            positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
        }
      });
  }

}
