import { HTTP } from "shared/lib";

import { API_URL } from "../../config";
import type { TUserReqestResponse } from "./types";

const userInstance = new HTTP({ baseUrl: API_URL + "/api/v2/auth/user" });

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
