import { api } from "shared/api";
import Router from "shared/lib/router";
import { ROUTES } from "shared/config";

const logoutApi = new api.auth.Logout();

export const logout = async () => {
  await logoutApi.post();

  Router.go(ROUTES.signIn);
};
