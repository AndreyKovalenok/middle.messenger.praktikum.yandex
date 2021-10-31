import { validators, validationMessages } from "shared/utils";

import type { TAuthForm } from "../../types";

export const authValidator = (values: TAuthForm) => {
  const errors: Partial<TAuthForm> = {};

  if (!values.login) {
    errors.login = validationMessages.required;
  } else if (!validators.minLength(values.login, 3)) {
    errors.login = validationMessages.loginMinLength(3);
  } else if (!validators.maxLength(values.login, 20)) {
    errors.login = validationMessages.loginMaxLength(20);
  }

  if (!validators.required(values.password)) {
    errors.password = validationMessages.required;
  } else if (!validators.minLength(values.password, 8)) {
    errors.password = validationMessages.passwordMinLength(8);
  } else if (!validators.maxLength(values.password, 40)) {
    errors.password = validationMessages.passwordMaxLength(40);
  } else if (!validators.someNumber(values.password)) {
    errors.password = validationMessages.someNumber;
  } else if (!validators.someCapitalize(values.password)) {
    errors.password = validationMessages.someCapitalize;
  }

  return errors;
};
