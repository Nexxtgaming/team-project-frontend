import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {SignupInfo} from '../auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo?: SignupInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignupInfo(
      this.form.username,
      this.form.name,
      this.form.surname,
      this.form.phone,
      this.form.email,
      this.form.account_type,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
