export interface fieldsType {
  id: number;
  label: string;
  placeholder: string;
  accessor: string;
  inputType?: string;
}

export interface formDataType {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
