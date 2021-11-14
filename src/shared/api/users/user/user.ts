import { HTTP } from "shared/lib";

import { PATH } from "../../config";
import type {
  TChangeUserProfileRequestPayload,
  TChangePasswordRequestPayload,
  TUserSearchRequestPayload,
} from "./types";
import type { TUser } from "../types";

const userInstance = new HTTP({ baseUrl: PATH + "/api/v2/user" });

export class User {
  changeProfile = (data: TChangeUserProfileRequestPayload) =>
    userInstance.put("/profile", {
      data,
    });

  changeAvatar = (data: FormData) =>
    userInstance.put<TUser, FormData>("/profile/avatar", {
      data,
    });

  changePassword = (data: TChangePasswordRequestPayload) =>
    userInstance.put("/password", {
      data,
    });

  getUser = (id: string) => userInstance.get<TUser>(`/${id}`);

  search = (data: TUserSearchRequestPayload) =>
    userInstance.post<TUser[]>("/search", {
      data,
    });
}
