import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User, Login } from '../../models';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';

import {
  Router
} from '@angular/router';

@Injectable()
export class AuthenticationService implements OnInit {
  isLoggedIn: boolean = false;
  isLoggedInChange: Subject<boolean> = new Subject<boolean>();
  message: string;
  redirectUrl: string;
  token: string;

  /**
   * Constructor
   */
  constructor(private _http: Http, private _router: Router) { 
    
    if(localStorage.getItem('userStored')){
      var userStored = JSON.parse(localStorage.getItem('userStored'));
      this.token = userStored && userStored.token;
      this.isLoggedIn = true;
      this.isLoggedInChange.next(this.isLoggedIn);
    }
    /*
     */
  }

  /**
   * NgInit
   */
  ngOnInit() {
    this.redirectUrl = '/home'
  }

  /**
   * Authenticate send user to the API 
   * and set login attributes.
   *
   * @param User
   * @return Observable<Producto[]>
   */
  authenticate(login: Login): Observable<boolean> {
    // const authUrl = 'https://localhost:3001/api/authenticate';  // URL to web api
    const authUrl = 'http://localhost:3000/api/authenticate';  // URL to web api
    
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    

    return this._http.post(authUrl, JSON.stringify(login), { headers: headers } )
      .map((response: Response) => {

        const token = response.json() && response.json().token;
        
        if (token) {
          this.token = token;
          this.isLoggedIn = true;
          this.isLoggedIn = true;
          this.isLoggedInChange.next(this.isLoggedIn);
          
          localStorage.setItem('userStored', JSON.stringify({ user: login.name, token: token }));

          return true;
          
        } else {
          return false;
        }
      });
  }

  /**
   * Logout unset login attributes.
   *
   * @return void
   */
  logout(): void {
    localStorage.removeItem('userStored');
    this.token = undefined;
    this.isLoggedIn = false;
    this.isLoggedInChange.next(this.isLoggedIn);

    this._router.navigate(['/login']);
  }
}
