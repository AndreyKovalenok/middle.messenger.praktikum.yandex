import { HTTP } from "shared/lib";

import { API_URL } from "../../config";
import type { TSignupRequestPayload, TSignupReqestResponse } from "./types";

const signupInstance = new HTTP({ baseUrl: API_URL + "/api/v2/auth/signup" });

export class Signup {
  post = (payload: TSignupRequestPayload) =>
    signupInstance.post<TSignupReqestResponse>("", {
      data: payload,
    });
}
