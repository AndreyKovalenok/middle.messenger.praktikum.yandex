import { HTTP } from "shared/lib";

import { PATH } from "../../config";
import type { TUserReqestResponse } from "./types";

const userInstance = new HTTP({ baseUrl: PATH + "/api/v2/auth/user" });

export class User {
  get = async () => {
    try {
      const data = await userInstance.get<TUserReqestResponse>("");

      return data;
    } catch (error) {
      console.error(error);
    }
  };
}
