import { validators, validationMessages } from "shared/utils";

import type { TRegisterForm } from "../../types";

export const registerValidator = (values: TRegisterForm) => {
  const errors: Partial<TRegisterForm> = {};

  if (!values.email) {
    errors.email = validationMessages.required;
  } else if (!validators.email(values.email)) {
    errors.email = validationMessages.invalidFormat;
  }

  const loginError = validators.login(values.login);
  if (loginError) {
    errors.login = loginError;
  }

  const firstNameError = validators.name(values.first_name);
  if (firstNameError) {
    errors.first_name = firstNameError;
  }

  const secondNameError = validators.name(values.second_name);
  if (secondNameError) {
    errors.second_name = secondNameError;
  }

  if (!values.phone) {
    errors.phone = validationMessages.required;
  } else if (!validators.minLength(values.phone, 10)) {
    errors.phone = validationMessages.invalidFormat;
  } else if (!validators.maxLength(values.phone, 15)) {
    errors.phone = validationMessages.invalidFormat;
  }

  const passwordError = validators.password(values.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  if (values.password !== values.repeat_password) {
    errors.repeat_password = validationMessages.unmatchedPasswords;
  }

  return errors;
};
