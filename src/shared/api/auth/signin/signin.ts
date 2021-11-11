import { HTTP } from "shared/lib";

import { PATH } from "../../config";
import type { TSigninRequestPayload } from "./types";

const signinInstance = new HTTP({ baseUrl: PATH + "/auth/signin" });

export class Signin {
  post = (payload: TSigninRequestPayload) =>
    signinInstance.post("", {
      data: payload,
    });
}
