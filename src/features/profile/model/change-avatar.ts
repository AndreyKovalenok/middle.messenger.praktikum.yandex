import { api } from "shared/api";

const userApi = new api.user.User();

export const changeAvatar = async (data: FormData) => {
  const userData = await userApi.changeAvatar(data);
  return userData;
};
