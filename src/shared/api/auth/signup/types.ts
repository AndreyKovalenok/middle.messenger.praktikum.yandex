export type TSignupRequestPayload = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type TSignupReqestResponse = {
  id: number;
};

export type TSignupRequestErrorResponse = {
  reason: string;
};
