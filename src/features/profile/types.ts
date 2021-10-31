export type TChangePasswordForm = {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
};

export type TChangeUserDataForm = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
};
