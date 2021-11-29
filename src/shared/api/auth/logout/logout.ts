import { HTTP } from "shared/lib";

import { API_URL } from "../../config";

const logoutInstance = new HTTP({ baseUrl: API_URL + "/api/v2/auth/logout" });

export class Logout {
  post = () => logoutInstance.post("");
}
