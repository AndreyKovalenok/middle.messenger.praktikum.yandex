import { api } from "shared/api";

const logoutApi = new api.auth.Logout();

export const logout = async () => {
  await logoutApi.post();
};
