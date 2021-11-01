import { validators, validationMessages } from "shared/utils";

import type { TRegisterForm } from "../../types";

export const registerValidator = (values: TRegisterForm) => {
  const errors: Partial<TRegisterForm> = {};

  const emailError = validators.email(values.email);
  if (emailError) {
    errors.email = emailError;
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

  const phoneError = validators.phone(values.phone);
  if (phoneError) {
    errors.phone = phoneError;
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
