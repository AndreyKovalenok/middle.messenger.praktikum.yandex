import { required, minLength, maxLength, someNumber, someCapitalize } from ".";
import { validationMessages } from "../messages";

export const password = (value: string) => {
  if (!required(value)) {
    return validationMessages.required;
  }

  if (!minLength(value, 8)) {
    return validationMessages.passwordMinLength(8);
  }

  if (!maxLength(value, 40)) {
    return validationMessages.passwordMaxLength(40);
  }

  if (!someNumber(value)) {
    return validationMessages.someNumber;
  }

  if (!someCapitalize(value)) {
    return validationMessages.someCapitalize;
  }
};
