import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { CONFIG }      from '../../config';

import {
  User,
  Login
} from '../../models';

import {
  AuthenticationService
} from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message: string;
  data: Login;
  
  constructor(
    public _auth: AuthenticationService, 
    public _router: Router
  ) {
    if(localStorage.getItem('userStored')){
      this._router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.data = new Login('','',false);
  }

  /**
   * Crear Submit
   *
   * @param Object new producto
   * @return void
   */
  login(login: Login): void {
    this._auth.authenticate(login).subscribe(
      res => {
        let redirect = this._auth.redirectUrl ? this._auth.redirectUrl : '/home';
        // Redirect the user
        this._router.navigate([redirect]);
      },
      error => {
        
        this.message = 'Login failed. Wrong user name or password.';
        console.log(error);
      }
    );
  }

  logout() {
    this._auth.logout();
    this.message = 'See ya';
  }
}