import { DynamicField } from './dynamic-field.model';

export const DYNAMIC_FIELDS_MOCK = [
  {
      controlType: 'text',
      id: 'first',
      label: 'My First',
      required: false,
  },
  {
      controlType: 'text',
      id: 'second',
      label: 'Second!',
      required: true,
  }
];

export const DYNAMIC_FIELD_MOCK = {
  controlType: 'text',
  id: 'pizza',
  label: 'Pizza!',
  required: false,
};
