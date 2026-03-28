export interface FieldsType {
  id: number;
  label: string;
  placeholder: string;
  accessor: string;
  inputType?: string;
}

export interface FormDataType {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export type authModes = 'login' | 'register';
