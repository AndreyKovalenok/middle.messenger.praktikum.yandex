export type TChangeUserProfileRequestPayload = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type TChangePasswordRequestPayload = {
  oldPassword: string;
  newPassword: string;
};

export type TUserSearchRequestPayload = {
  login: string;
};
