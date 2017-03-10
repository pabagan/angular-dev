/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
    FormControl,
    FormGroup,
    ReactiveFormsModule
} from '@angular/forms';

import { DynamicFieldComponent } from './dynamic-field.component';
import {
  DynamicField,
  DYNAMIC_FIELD_MOCK
} from '../../../models';

const FORM_MOCK = new FormGroup({
  pizza: new FormControl(),
});

FORM_MOCK.setValue({pizza: 'Nancy'});



describe('DynamicFieldComponent', () => {
  let component: DynamicFieldComponent;
  let fixture: ComponentFixture<DynamicFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFieldComponent],
      imports: [
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFieldComponent);
    component = fixture.componentInstance;
    component.field = DYNAMIC_FIELD_MOCK;
    component.form = FORM_MOCK;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should FORM_MOCK instanceof FormGroup', () => {
    expect(FORM_MOCK instanceof FormGroup).toBe(true);
  });

  it('should return true if the form control is valid', () => {
    expect(component.isValid).toBe(true);
  });
});
