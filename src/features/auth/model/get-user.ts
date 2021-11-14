import { api } from "shared/api";
import { router } from "shared/utils";

const userApi = new api.auth.User();

export const getUser = async () => {
  const data = await userApi.get();
  return data;
};
