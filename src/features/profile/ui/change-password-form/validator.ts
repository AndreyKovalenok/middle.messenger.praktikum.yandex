import { validators, validationMessages } from "shared/utils";

import type { TChangePasswordForm } from "../../types";

export const changePasswordValidator = (values: TChangePasswordForm) => {
  const errors: Partial<TChangePasswordForm> = {};

  if (!validators.required(values.newPassword)) {
    errors.newPassword = validationMessages.required;
  } else if (!validators.minLength(values.newPassword, 8)) {
    errors.newPassword = validationMessages.passwordMinLength(8);
  } else if (!validators.maxLength(values.newPassword, 40)) {
    errors.newPassword = validationMessages.passwordMaxLength(40);
  } else if (!validators.someNumber(values.newPassword)) {
    errors.newPassword = validationMessages.someNumber;
  } else if (!validators.someCapitalize(values.newPassword)) {
    errors.newPassword = validationMessages.someCapitalize;
  }

  if (!validators.required(values.oldPassword)) {
    errors.oldPassword = validationMessages.required;
  } else if (!validators.minLength(values.oldPassword, 8)) {
    errors.oldPassword = validationMessages.passwordMinLength(8);
  } else if (!validators.maxLength(values.oldPassword, 40)) {
    errors.oldPassword = validationMessages.passwordMaxLength(40);
  } else if (!validators.someNumber(values.oldPassword)) {
    errors.oldPassword = validationMessages.someNumber;
  } else if (!validators.someCapitalize(values.oldPassword)) {
    errors.oldPassword = validationMessages.someCapitalize;
  }

  if (!values.repeatNewPassword) {
    errors.repeatNewPassword = validationMessages.required;
  } else if (values.newPassword !== values.repeatNewPassword) {
    errors.repeatNewPassword = validationMessages.unmatchedPasswords;
  }

  return errors;
};
