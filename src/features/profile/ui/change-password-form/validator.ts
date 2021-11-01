import { validators, validationMessages } from "shared/utils";

import type { TChangePasswordForm } from "../../types";

export const changePasswordValidator = (values: TChangePasswordForm) => {
  const errors: Partial<TChangePasswordForm> = {};

  const newPasswordError = validators.password(values.newPassword);
  if (newPasswordError) {
    errors.newPassword = newPasswordError;
  }

  const oldPasswordError = validators.password(values.oldPassword);
  if (oldPasswordError) {
    errors.oldPassword = oldPasswordError;
  }

  if (!values.repeatNewPassword) {
    errors.repeatNewPassword = validationMessages.required;
  } else if (values.newPassword !== values.repeatNewPassword) {
    errors.repeatNewPassword = validationMessages.unmatchedPasswords;
  }

  return errors;
};
