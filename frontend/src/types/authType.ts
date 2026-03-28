export interface AuthFieldsAttributeType {
  id: number;
  label: string;
  placeholder: string;
  accessor: string;
  inputType?: string;
}

export interface AuthFormDataType {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export type authModes = 'login' | 'register';
