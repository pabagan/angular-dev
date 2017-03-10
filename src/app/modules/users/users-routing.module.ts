import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component'


import {
  UserListComponent,
  UserDetailComponent,
  UserCreateComponent,
  UserEditComponent,
} from './components';

const usersRoutes: Routes = [{ 
  path: '', 
  component: UsersComponent,
  children: [
    //{ path: '', redirectTo: '../home', pathMatch: 'full'},
    { path: '', component: UserListComponent },
    { path: 'new', component: UserCreateComponent },
    { path: ':id', component: UserDetailComponent },
    { path: 'edit/:id', component: UserEditComponent },
    //
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class UsersRoutingModule { }
