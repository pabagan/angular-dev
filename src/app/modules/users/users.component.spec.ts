/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { UsersComponent } from './users.component';
import { User, UserMock, AUTH_OK, AUTH_KO } from '../../models';
import { AuthenticationService } from '../../services';

import { HttpModule } from '@angular/http';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let authenticationService: AuthenticationService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ UsersComponent ],
      providers: [
        AuthenticationService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    // TwainService actually injected into the component
    authenticationService = fixture.debugElement.injector.get(AuthenticationService);

    // Setup spy on the `getQuote` method
    spy = spyOn(authenticationService, 'authenticate' )
          .and.returnValue(Promise.resolve(AUTH_OK));

    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  /*
  it('should show quote after getQuote promise (async)',
    async(inject([AuthenticationService], (service) => {
      fixture.detectChanges();

      fixture.whenStable().then(() => { // wait for async getQuote
        fixture.detectChanges();        // update view with quote
        console.log('--------------------------------------------');
        console.log(component);
        //console.log(authenticationService.);
        console.log(component.authenticate(UserMock));
        //expect(el.textContent).toBe(testQuote);
      });
  }));

  it('should test', () => {
    //mBankAccountResource.getBankAccountData.mostRecentCall.args
    var result;
    result = component.authenticate(UserMock);
    console.log('--------------------------------------------');
    console.log(spy());
    console.log('--------------------------------------------');
    console.log(result);

    result.subscribe(
      result =>{
        console.log(result);
      },
      error =>{
        console.log(error);
      },
    );
    //console.log(component.token);
    //console.log(spy());
  });

  it('should create token on Authenticate OK', () => {
    component.authenticate(UserMock);
    expect(component.token).toBeDefined();
  });

  it('should not show quote before OnInit', () => {
    expect(spy.calls.any()).toBe(false, 'authenticate not yet called');
  });

  it('should still not show quote after component initialized', () => {
    fixture.detectChanges();
    // getQuote service is async => still has not returned with quote
    expect(spy.calls.any()).toBe(true, 'authenticate called');
  });

   */
  /*
  it('should show quote after getQuote promise (async)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getQuote
      spy();
      fixture.detectChanges();        // update view with quote
      expect(component.token).toBe(AUTH_OK.token);
    });
  }));

  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    //component.authenticate(UserMock);
    console.log('-------------------------------------------');
    console.log(component.token);
    console.log(spy.calls.all());
    //expect(component.token).toBe(AUTH_OK.token);
  }));


  it('should create token when authenticate OK', () => {
    //authenticateUser
    spy();
    expect(true).toBe(true);
    expect(spy.calls.any()).toBe(true, 'getQuote called');
  });
   */
});
