import { HTTP } from "shared/lib";

import { API_URL } from "../../config";
import type { TChatPostPayload, TChatDeletePayload } from "./types";
import type { TGetChatsResponse } from "../types";

const chatsInstance = new HTTP({ baseUrl: API_URL + "/api/v2/chats" });

export class Chats {
  get = () => chatsInstance.get<TGetChatsResponse[]>("");

  post = (payload: TChatPostPayload) =>
    chatsInstance.post("/", {
      data: payload,
    });

  delete = (payload: TChatDeletePayload) =>
    chatsInstance.delete("/", {
      data: payload,
    });

  token = (id: string) =>
    chatsInstance.post<{
      token: string;
    }>(`/token/${id}`);
}
