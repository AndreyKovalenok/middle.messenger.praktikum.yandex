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

  if (!validators.required(values.first_name)) {
    errors.first_name = validationMessages.required;
  } else if (
    !validators.cyrillicSymbols(values.first_name) &&
    !validators.latinSymbols(values.first_name)
  ) {
    errors.first_name = validationMessages.invalidSymbols;
  } else if (values.first_name[0] !== values.first_name[0].toUpperCase()) {
    errors.first_name = validationMessages.capitalizedFirstSymbol;
  }

  if (!validators.required(values.second_name)) {
    errors.second_name = validationMessages.required;
  } else if (
    !validators.cyrillicSymbols(values.second_name) &&
    !validators.latinSymbols(values.second_name)
  ) {
    errors.second_name = validationMessages.invalidSymbols;
  } else if (values.second_name[0] !== values.second_name[0].toUpperCase()) {
    errors.second_name = validationMessages.capitalizedFirstSymbol;
  }

  if (!values.phone) {
    errors.phone = validationMessages.required;
  } else if (!validators.minLength(values.phone, 10)) {
    errors.phone = validationMessages.invalidFormat;
  } else if (!validators.maxLength(values.phone, 15)) {
    errors.phone = validationMessages.invalidFormat;
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

  if (values.password !== values.repeat_password) {
    errors.repeat_password = validationMessages.unmatchedPasswords;
  }

  return errors;
};
