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
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.signup(this.user)
      .subscribe((res: any) => {
        
        console.log(res);

        let unknown = Object.keys(res.message)[0];

        switch (res.status) {

          case false:
            this.toastr.error(res.message[unknown], 'Sign up Error', {
              timeOut: 5000,
              positionClass: 'toast-top-center'
            });
            break;

          case 'Error':
            this.toastr.error(res.message[unknown], 'Sign up Error', {
              timeOut: 5000,
              positionClass: 'toast-top-center'
            });
            break;

          case 'Success':
            this.toastr.success(
              'Login to continue.',
              'Success, You have signed up.',
              {
                timeOut: 5000,
                positionClass: 'toast-top-center'
              });
              break;
          
          default:
            break;
        }
      })
  }

}
