import { api } from "shared/api";
import { TSigninRequestPayload } from "shared/api/auth";
import { router } from "shared/utils";

const signinApi = new api.auth.Signin();

export const signin = async (data: TSigninRequestPayload) => {
  await signinApi.post(data);

  router.go("/chats");
};
