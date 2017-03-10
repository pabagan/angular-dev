/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';

import {
    ReactiveFormsModule
} from '@angular/forms';

import {
  AppModule,
} from './app.module';

import {
  DynamicFormsModule,
} from './modules';

import { AppRoutingModule } from './app-routing.module';

import {
  HeaderComponent,
  HomeComponent,
  LoginComponent,
} from './components';

import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DynamicFormsModule,
        AppRoutingModule,
        AppModule,
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  }));
});
