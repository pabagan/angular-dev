import { Injectable } from '@angular/core';
import {
  CanActivate, 
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class GuardService implements CanActivate {
  constructor(
    private _authentication: AuthenticationService, 
    private _router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this._authentication.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this._authentication.redirectUrl = url;

    // Navigate to the login page with extras
    this._router.navigate(['/login']);
    return false;
  }
}