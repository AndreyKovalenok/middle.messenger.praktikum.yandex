import { api } from "shared/api";
import { TChangeUserProfileRequestPayload } from "shared/api/users/types";

const userApi = new api.user.User();

export const changeProfile = async (data: TChangeUserProfileRequestPayload) => {
  await userApi.changeProfile(data);
};
