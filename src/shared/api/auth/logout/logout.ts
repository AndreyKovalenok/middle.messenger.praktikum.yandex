import { HTTP } from "shared/lib";

import { PATH } from "../../config";

const logoutInstance = new HTTP({ baseUrl: PATH + "/api/v2/auth/logout" });

export class Logout {
  post = () => logoutInstance.post("");
}
