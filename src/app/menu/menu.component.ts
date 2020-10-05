
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../authentication/service/auth.service';

// import { AuthService } from '../authentication/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    console.log("this is menu compoment");
  }
  constructor(private authService: AuthService, public router: Router) { }
  homepageaccess:boolean;

  // constructor( public router: Router) { }

  // ngOnInit() {
  //     this.authService.validateUser()
  // }

  // miscAccess(){
  //   if (this.authService.miscAccess === true) {
  //     this.homepageaccess = true;
  //   }
  //   return this.authService.miscAccess
  // }

  // homepageAccess() {
  //   return this.homepageaccess;;
  // }

  // tiAccess() {

  //   if (this.authService.tiAccess === true) {
  //     this.homepageaccess = true;
  //   }
  //   return this.authService.tiAccess
  // }

  getUserName(): string {
    return this.authService.user.userId;
  }
  logout(): void{
    this.authService.logout();
  }
  OnDestroy() {
    console.log("destroying child...")
  }

}
