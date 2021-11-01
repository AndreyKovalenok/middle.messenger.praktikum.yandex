import { validators } from "shared/utils";

import type { TChangeUserDataForm } from "../../types";

export const changeUserDataValidator = (values: TChangeUserDataForm) => {
  const errors: Partial<TChangeUserDataForm> = {};

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

  const displayNameError = validators.name(values.display_name);
  if (displayNameError) {
    errors.display_name = displayNameError;
  }

  const phoneError = validators.phone(values.phone);
  if (phoneError) {
    errors.phone = phoneError;
  }

  return errors;
};
