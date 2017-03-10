export interface DynamicField {
  controlType: string;
  id: string;
  label: string;
  options?: Array<any>;
  required: boolean;
  type?: string;
  value?: any;
}
