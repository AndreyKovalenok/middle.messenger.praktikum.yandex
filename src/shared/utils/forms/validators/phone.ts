import { minLength, maxLength, required } from ".";
import { validationMessages } from "../messages";

export const phone = (value: string) => {
  if (!required(value)) {
    return validationMessages.required;
  }

  if (minLength(value, 10)) {
    return validationMessages.invalidFormat;
  }

  if (maxLength(value, 15)) {
    return validationMessages.invalidFormat;
  }
};
