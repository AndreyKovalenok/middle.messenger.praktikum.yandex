import { HTTP } from "shared/lib";

import { PATH } from "../config";
import type {
  TChatPostPayload,
  TGetCahtsResponse,
  TChatDeletePayload,
  TGetChatFilesRequest,
  TGetChatFilesResponse,
} from "./types";

const chatsInstance = new HTTP({ baseUrl: PATH + "api/v2/chats" });

export class Chats {
  get = () => chatsInstance.get<TGetCahtsResponse>("/");

  post = (payload: TChatPostPayload) =>
    chatsInstance.post("/", {
      data: payload,
    });

  delete = (payload: TChatDeletePayload) =>
    chatsInstance.delete("/", {
      data: payload,
    });

  getChatFiles = (id: string) =>
    chatsInstance.get<TGetChatFilesRequest, TGetChatFilesResponse>(
      `/${id}/files`
    );
}
