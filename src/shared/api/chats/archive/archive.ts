import { HTTP } from "shared/lib";

import { API_URL } from "../../config";
import type {
  TArchiveChatsRequestResponse,
  TArchiveChatReqestPayload,
} from "./types";

const archiveInstance = new HTTP({ baseUrl: API_URL + "/api/v2/chats" });

export class Archive {
  get = () =>
    archiveInstance.get<unknown, TArchiveChatsRequestResponse>("/archive");

  archive = (payload: TArchiveChatReqestPayload) =>
    archiveInstance.post<TArchiveChatsRequestResponse>("/archive", {
      data: payload,
    });

  unarchive = (payload: TArchiveChatReqestPayload) =>
    archiveInstance.post<TArchiveChatsRequestResponse>("/unarchive", {
      data: payload,
    });
}
