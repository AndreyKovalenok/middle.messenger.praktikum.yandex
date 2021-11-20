import { api } from "shared/api";
import { TSigninRequestPayload } from "shared/api/auth";
import Router from "shared/lib/router";
import { ROUTES } from "shared/config";

const signinApi = new api.auth.Signin();

export const signin = async (data: TSigninRequestPayload) => {
  await signinApi.post(data);

  Router.go(ROUTES.messenger);
};
