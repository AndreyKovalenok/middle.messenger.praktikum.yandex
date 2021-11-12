import { HTTP } from "shared/lib";

import { PATH } from "../../config";
import type {
  TArchiveChatsRequestResponse,
  TArchiveChatReqestPayload,
} from "./types";

const archiveInstance = new HTTP({ baseUrl: PATH + "api/v2/chats" });

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
