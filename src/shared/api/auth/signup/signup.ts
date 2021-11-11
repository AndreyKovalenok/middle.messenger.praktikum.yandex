import { HTTP } from "shared/lib";

import { PATH } from "../../config";
import type { TSignupRequestPayload, TSignupReqestResponse } from "./types";

const signupInstance = new HTTP({ baseUrl: PATH + "/auth/signup" });

export class Signup {
  post = (payload: TSignupRequestPayload) =>
    signupInstance.post<TSignupReqestResponse>("", {
      data: payload,
    });
}
