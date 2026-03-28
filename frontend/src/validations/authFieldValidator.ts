import type { authModes, FormDataType } from "../types/authType";

export const authFieldValidator = (
  formData: FormDataType,
  parent: authModes,
) => {
    console.log(parent)
  const name = formData.name?.trim();
  const password = formData.password?.trim();
  const confirmPassword = formData.confirmPassword?.trim();

  if (parent === "register" && !name) {
    return { valid: false, message: "Please provide name!" };
  }

  if(!formData.email.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,4}/)){
    return { valid: false, message: "Invalid email"}
  }

  if (parent === "register" &&(((password && confirmPassword)?.length! >= 6) && password !== confirmPassword)) {
    return { valid: false, message: "Passwords don't match!" };
  }

  return { valid: true };
};
