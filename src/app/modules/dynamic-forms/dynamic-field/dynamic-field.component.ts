import {
    Component,
    Input
} from '@angular/core';
import {
    FormGroup
} from '@angular/forms';

import { DynamicField } from '../../../models';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent {
  @Input() form: FormGroup;
  @Input() field: DynamicField;

  get isValid(): boolean {
    return this.form.controls[this.field.id].valid;
  }
}
