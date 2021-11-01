import { validators } from "shared/utils";

import type { TAuthForm } from "../../types";

export const authValidator = (values: TAuthForm) => {
  const errors: Partial<TAuthForm> = {};

  const loginError = validators.login(values.login);
  if (loginError) {
    errors.login = loginError;
  }

  const passwordError = validators.password(values.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  return errors;
};
