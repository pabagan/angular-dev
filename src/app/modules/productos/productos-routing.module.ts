import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos.component';
import { ProductosListComponent } from './productos-list/productos-list.component';

const routes: Routes = [{
  path: '',
  component: ProductosComponent,
  children: [
    { path: '', component: ProductosListComponent },
    // { path: '', redirectTo: 'list', pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductosRoutingModule { }
