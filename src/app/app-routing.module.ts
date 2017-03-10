import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  LoginComponent
} from './components';

import {
  GuardService,
} from './services';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'users', 
    pathMatch: 'full' 
  },
  { path: 'users', loadChildren: 'app/modules/users/users.module#UsersModule' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardService] },
  { path: 'productos', loadChildren: 'app/modules/productos/productos.module#ProductosModule' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
