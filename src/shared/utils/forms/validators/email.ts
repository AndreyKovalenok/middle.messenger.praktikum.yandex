import { required, emailFormat } from ".";
import { validationMessages } from "../messages";

export const email = (value: string) => {
  if (!required(value)) {
    return validationMessages.required;
  }

  if (!emailFormat(value)) {
    return validationMessages.invalidFormat;
  }
};
