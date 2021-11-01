import { minLength, maxLength } from ".";
import { validationMessages } from "../messages";

export const login = (value: string) => {
  if (!value) {
    return validationMessages.required;
  }
  if (!minLength(value, 3)) {
    return validationMessages.loginMinLength(3);
  }

  if (!maxLength(value, 20)) {
    return validationMessages.loginMaxLength(20);
  }
};
