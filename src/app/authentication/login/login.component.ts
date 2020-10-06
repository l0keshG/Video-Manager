import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/shared/models/user';

import { AuthService } from 'src/app/authentication/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: FormControl;
  password: FormControl;
  loginFormGroup: FormGroup;
  loginError: boolean;
  errorMessage: string;
  messageString: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.userName = new FormControl("", [Validators.required]);
    this.password = new FormControl("", [Validators.required]);
    this.loginFormGroup = new FormGroup({
      userName: this.userName,
      password: this.password
    });
  }

  // userAccess() {

  //   if (this.authService.userAuth === false) {
  //     return this.authService.userAccess;
  //   }
  
  // }

  // invalidUser() {
  //   return this.authService.userAuth;
  // }

  login() {
    this.loginError = false;
    if (this.loginFormGroup.valid) {
      let user: User = new User();
      user.userId = this.userName.value;
      user.password = this.password.value;
      this.authService.login(user)
        .subscribe(res => this.router.navigate([""]));
    }
  }
}
