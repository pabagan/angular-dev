/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ProductosComponent } from './productos.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { RouterOutletMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductosRoutingModule,
        RouterTestingModule
      ],
      declarations: [
        ProductosComponent,
        ProductosListComponent,
      ],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ProductosComponent);
      component = fixture.componentInstance;

    });
  }));

  beforeEach(() => {
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
