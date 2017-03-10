import { Component, OnInit } from '@angular/core';

import {
  DynamicField,
  DYNAMIC_FIELDS_MOCK,
} from './models';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = 'app works!';
  
  constructor() {
  }

  ngOnInit() {
  }
}
