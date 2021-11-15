import { api } from "shared/api";

const userApi = new api.user.User();

export const searchUser = async (login: string) => {
  const data = await userApi.search({ login });
  return data;
};
