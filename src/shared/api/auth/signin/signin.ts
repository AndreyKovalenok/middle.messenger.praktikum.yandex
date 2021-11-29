import { HTTP } from "shared/lib";

import { API_URL } from "../../config";
import type { TSigninRequestPayload } from "./types";

const signinInstance = new HTTP({ baseUrl: API_URL + "/api/v2/auth/signin" });

export class Signin {
  post = (payload: TSigninRequestPayload) =>
    signinInstance.post("", {
      data: payload,
    });
}
