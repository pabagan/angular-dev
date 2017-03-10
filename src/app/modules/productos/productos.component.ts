import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  template: `<router-outlet></router-outlet>`,
})
export class ProductosComponent implements OnInit {

  title = 'Productos';

  constructor() { }

  ngOnInit() {
  }
}
