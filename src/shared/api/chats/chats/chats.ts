import { HTTP } from "shared/lib";

import { PATH } from "../../config";
import type { TChatPostPayload, TChatDeletePayload } from "./types";
import type { TGetChatsResponse } from "../types";

const chatsInstance = new HTTP({ baseUrl: PATH + "api/v2/chats" });

export class Chats {
  get = () => chatsInstance.get<TGetChatsResponse[]>("/");

  post = (payload: TChatPostPayload) =>
    chatsInstance.post("/", {
      data: payload,
    });

  delete = (payload: TChatDeletePayload) =>
    chatsInstance.delete("/", {
      data: payload,
    });
}
