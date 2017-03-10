import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HttpModule } from '@angular/http';

import { UsersComponent } from './users.component';

import { UsersService } from './services/users.service';

import {
  UserListComponent,
  UserDetailComponent,
  UserCreateComponent,
  UserEditComponent,
} from './components';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UsersInMemoryDbService }  from './users.service.in-memory-api';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    UsersRoutingModule,

    // fake api
    InMemoryWebApiModule.forRoot(UsersInMemoryDbService),
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
  ],
  providers: [
    UsersService
  ],
})
export class UsersModule { }
