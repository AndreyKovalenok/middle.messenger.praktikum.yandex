import { validators, validationMessages } from "shared/utils";

import type { TAuthForm } from "../../types";

export const authValidator = (values: TAuthForm) => {
  const errors: Partial<TAuthForm> = {};

  if (!validators.required(values.login)) {
    errors.login = validationMessages.required;
  } else if (
    !validators.cyrillicSymbols(values.login) &&
    !validators.latinSymbols(values.login)
  ) {
    errors.login = validationMessages.invalidSymbols;
  } else if (values.login[0] !== values.login[0].toUpperCase()) {
    errors.login = validationMessages.capitalizedFirstSymbol;
  }

  if (!validators.required(values.password)) {
    errors.password = validationMessages.required;
  } else if (!validators.minLength(values.password, 8)) {
    errors.password = validationMessages.passwordMinLength;
  } else if (!validators.maxLength(values.password, 40)) {
    errors.password = validationMessages.passwordMaxLength;
  } else if (!validators.someNumber(values.password)) {
    errors.password = validationMessages.someNumber;
  } else if (!validators.someCapitalize(values.password)) {
    errors.password = validationMessages.someCapitalize;
  }

  return errors;
};
