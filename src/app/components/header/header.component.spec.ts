import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';
import { Subscription } from 'rxjs/Subscription';

import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule } from '@angular/http';

import { 
  GuardService,
  AuthenticationService
} from '../../services';

import {  } from '../';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let subscription: Subscription;
  let de: DebugElement;
  let el: HTMLElement;
  let service: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        HttpModule,
        RouterTestingModule,
      ],
      providers: [
        GuardService,
        AuthenticationService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(AuthenticationService);;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as appName 'APP Name'`, async(() => {
    expect(component.appName).toEqual('APP Name');
  }));

  it('should render title in a #app-brand tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#app-brand').textContent).toContain('APP Name');
  }));


  it('should logout clicking button logout', async(() => {
    de = fixture.debugElement.query(By.css('#app-logout'));
    el = de.nativeElement;

    /*
    
    de.triggerEventHandler('click', null);

    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log('----------------------------');
    console.log(service);
    expect(de).toBeUndefined('APP Name');
    
     */
    //const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('#app-brand').textContent).toContain('APP Name');
  }));

});
