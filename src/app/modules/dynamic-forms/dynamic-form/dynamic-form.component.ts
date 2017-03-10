import { Component, Input, OnInit } from '@angular/core';

import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { DynamicField } from '../../../models';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: Array<DynamicField>;

  formGroup: FormGroup;
  payload: string;

  ngOnInit() {
    this.formGroup = this.generateForm(this.fields || []);
  }

  private generateForm(fields: Array<DynamicField>): FormGroup {
    const formControls = fields.reduce(this.generateControl, {});
    return new FormGroup(formControls);
  }

  private generateControl(controls: any, field: DynamicField) {
    if (field.required) {
      controls[field.id] = new FormControl(field.value || '', Validators.required);
    } else {
      controls[field.id] = new FormControl(field.value || '');
    }

    return controls;
  }

  submit() {
    this.payload = JSON.stringify(this.formGroup.value);
  }

}
