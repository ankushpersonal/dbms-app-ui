import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  constructor(private _router : Router) { }

  loginView : boolean = true;
  loginForm = {"email" : "" , "password" : ""};
  signupForm = {"firstName" : "" , "lastName":"" , "email" : "" , "password" : ""};

  // Toggle view
  viewToggle(data: boolean){
    data ? this.loginView = false :  this.loginView = true;
  }

  // Login to the application
  login(){
    if(this._router.url === '/shop') {
    this._router.navigateByUrl('/shop/profile');
    } else {
      this._router.navigateByUrl('/customer/profile');
    }
  }

  // Sign up to the application
  signup(){
    this.loginView = true;
    this._router.navigateByUrl('/customer');
  }

}
