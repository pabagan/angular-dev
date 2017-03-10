/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Login,
  LoginMock,
  User,
  UserMock } from '../../models';

import { Observable, Subject } from 'rxjs';

describe('AuthenticationService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        AuthenticationService,
      ],
    });
  });

  beforeEach(inject([AuthenticationService], authenticationService => {
    service = authenticationService;
  }));

  it('should construct',  () => {
    expect(service).toBeDefined();
  });
  
  it('should login OK', async(() => {
    service.authenticate(LoginMock).subscribe(
      res => {
        // check localStorage
        let userStored = JSON.parse(localStorage.getItem('userStored'));

        expect(service.isLoggedIn).toBe(true, 'service.isLoggedIn should be true');
        expect( typeof service.token).toBe('string', 'service.token should string');
        expect(localStorage.getItem('userStored')).toBeDefined('localStorage(\'userStored\') should be defined');
        expect(userStored.user).toBe(LoginMock.name, 'localStorage(\'userStored\')');
        expect(userStored.token).toEqual(service.token, 'localStorage.token not matching with service.token');
      },
      error => {
        expect(error).toBeUndefined();
      }
    );
  }));

  it('should login KO', async(() => {
    LoginMock.password = 'wrongPassword';
   
    let result;
    result = service.authenticate(LoginMock);
    result.subscribe(
      res => {
        expect(res['success']).toBe(false, 'logged passing wrong credentials');
      },
      error => {
        expect(error).toBeDefined('error should be defined');
      }
    );
  }));

  /*
  
  it('should logout', async(() => {
    service.logout();
    
    expect(service.user).toBeUndefined('user should be undefined');
    expect(service.isLoggedIn).toBeFalsy('isLoggedIn should be false');
    expect(service.token).toBeUndefined('token should be undefined');
  }));
   */
});
