import { api } from "shared/api";
import { TSigninRequestPayload } from "shared/api/auth";
import { router, state } from "shared/utils";

import { getUser } from "./get-user";

const signinApi = new api.auth.Signin();

export const signin = async (data: TSigninRequestPayload) => {
  await signinApi.post(data);

  const userData = await getUser();

  state.change({
    user: userData,
  });

  router.go("/chats");
};
