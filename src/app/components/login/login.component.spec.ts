import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  AuthenticationService
} from '../../services';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule }   from '@angular/forms';
import {
  HttpModule } from '@angular/http';

import {
  User,
  UserMock,
  AUTH_OK,
  AUTH_KO } from '../../models';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpModule
      ],
      declarations: [ LoginComponent ],
      providers: [ AuthenticationService ],
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should login if correct credentials passed and set token at localStorage`', async(() => {
    
    localStorage.clear();
    console.log('---------------------');
    console.log('------------------------------------');
    console.log('--------------------------------------------------');
    console.log(localStorage.getItem('user'));
    console.log('--------------------------------------------------');
    component.login(UserMock);
    console.log(localStorage.getItem('user'));
    expect(localStorage.getItem('user')).toBeDefined();

    result.subscribe(
      res => {
        expect(service.user).toEqual(UserMock);
        expect(service.isLoggedIn).toBe(true);
        expect(res['success']).toBe(true);
        expect(res['message']).toContain('User authenticated');
      },
      error => {
        expect(error).toBeUndefined();
      }
    );
  }));
   */

});
