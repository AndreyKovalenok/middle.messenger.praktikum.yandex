import { api } from "shared/api";
import { TChangePasswordRequestPayload } from "shared/api/users";

const userApi = new api.user.User();

export const changePassword = async (data: TChangePasswordRequestPayload) => {
  await userApi.changePassword(data);
};
