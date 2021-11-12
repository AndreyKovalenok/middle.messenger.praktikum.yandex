import { HTTP } from "shared/lib";

import { PATH } from "../../config";
import type {
  TGetChatFilesResponse,
  TChatUser,
  TGetNewMessagesResponse,
  TUpdateUsersRequest,
} from "./types";
import type { TGetChatsResponse } from "../types";

const chatInstance = new HTTP({ baseUrl: PATH + "api/v2/chats" });

export class Chat {
  getChatFiles = (id: string) =>
    chatInstance.get<unknown, TGetChatFilesResponse>(`/${id}/files`);

  getChatCommon = (id: string) =>
    chatInstance.get<TGetChatsResponse[]>(`/${id}/common`);

  getChatUsers = (id: string) => chatInstance.get<TChatUser[]>(`/${id}/users`);

  getNewMessages = (id: string) =>
    chatInstance.get<TGetNewMessagesResponse>(`/new/${id}`);

  // TODO: add data
  uploadChatAvatar = () =>
    chatInstance.put("/avatar", {
      data: {},
    });

  addUsersToChat = (data: TUpdateUsersRequest) =>
    chatInstance.put("/users", {
      data,
    });

  deleteUsersFromChat = (data: TUpdateUsersRequest) =>
    chatInstance.delete("/users", {
      data,
    });
}
