import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import {
  UsersModule,        // lazy load with router
  DynamicFormsModule,
} from './modules';

import {
  HeroService,
  AuthenticationService,
  GuardService
} from './services';

import {
  HeaderComponent,
  HomeComponent,
  LoginComponent
} from './components';

import {
  AppComponent,
} from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    DynamicFormsModule,
    UsersModule, // lazy load with router
  ],
  bootstrap: [ AppComponent ],
  providers:[
    AuthenticationService,
    HeroService,
    GuardService,
  ]
})
export class AppModule {}
