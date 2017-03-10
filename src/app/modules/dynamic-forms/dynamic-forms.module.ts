import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    DynamicFormComponent,
    DynamicFieldComponent,
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFieldComponent,
  ]
})
export class DynamicFormsModule { }
