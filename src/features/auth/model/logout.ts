import { api } from "shared/api";
import { router } from "shared/utils";

const logoutApi = new api.auth.Logout();

export const logout = async () => {
  await logoutApi.post();

  router.go("/login");
};
