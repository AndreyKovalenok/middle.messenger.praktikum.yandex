import { api } from "shared/api";
import { TSignupRequestPayload } from "shared/api/auth";

import { signin } from "./signin";

const signupApi = new api.auth.Signup();

export const signup = async (data: TSignupRequestPayload) => {
  const { login, password } = data;

  const id = await signupApi.post(data);

  await signin({
    login,
    password,
  });
};
