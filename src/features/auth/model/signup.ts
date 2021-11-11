import { api } from "shared/api";
import { TSignupRequestPayload } from "shared/api/auth";
import { router } from "shared/utils";

const signupApi = new api.auth.Signup();
const signinApi = new api.auth.Signin();

export const signup = async (data: TSignupRequestPayload) => {
  const id = await signupApi.post(data);

  await signinApi.post({
    login: data.login,
    password: data.password,
  });

  router.go("/chats");
};
