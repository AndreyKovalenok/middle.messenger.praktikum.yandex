import { HTTP } from "shared/lib";

import { API_URL } from "../../config";
import type { TUserReqestResponse } from "./types";

const userInstance = new HTTP({ baseUrl: API_URL + "/api/v2/auth/user" });

export class User {
  get = () => userInstance.get<TUserReqestResponse>("");
}
