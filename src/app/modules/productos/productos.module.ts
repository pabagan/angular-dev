import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ProductosListComponent } from './productos-list/productos-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  declarations: [
    ProductosComponent,
    ProductosListComponent
  ],
  exports: [
    ProductosComponent,
    ProductosListComponent
  ]
})
export class ProductosModule { }
