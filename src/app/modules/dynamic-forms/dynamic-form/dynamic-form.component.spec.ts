/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFieldComponent } from '../dynamic-field/dynamic-field.component';

import { DYNAMIC_FIELDS_MOCK } from '../../../models';

describe('DynamicFormComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule
      ],
      declarations: [ DynamicFormComponent, DynamicFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    component.fields = DYNAMIC_FIELDS_MOCK;
    fixture.detectChanges();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should create a `FormGroup` comprised of `FormControl`s', () => {
      component.ngOnInit();

      expect(component.formGroup instanceof FormGroup).toBe(true);

      expect(Object.keys(component.formGroup.controls)).toEqual([
        'first', 'second'
      ]);
  });

  it('should set the `payload` to a stringified version of our form values', () => {
    component.ngOnInit();

    component.formGroup.controls['first'].setValue('pizza');
    component.formGroup.controls['second'].setValue('brocoli');

    component.submit();

    expect(component.payload).toEqual(JSON.stringify({first: 'pizza', second: 'brocoli'}));
  });
});
