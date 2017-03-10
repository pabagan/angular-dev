import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription }   from 'rxjs/Subscription';

import {
  AuthenticationService
} from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  appName = 'APP Name';
  showHeader: boolean;
  subscription: Subscription;

  constructor(private _auth: AuthenticationService) { 
  }

  ngOnInit() {
    this.showHeader = this._auth.isLoggedIn; 
    
    // Subscribe to isLoggedIn
    this.subscription = this._auth.isLoggedInChange.subscribe((value) => { 
      this.showHeader = value; 
    });
  }

  logout(){
    this._auth.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  
}
