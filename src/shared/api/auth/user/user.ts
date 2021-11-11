import { HTTP } from "shared/lib";

import { PATH } from "../../config";
import type { TUserReqestResponse } from "./types";

const userInstance = new HTTP({ baseUrl: PATH + "/auth/user" });

export class User {
  get = () => userInstance.get<TUserReqestResponse>("");
}
