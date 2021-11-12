import type { TUser } from "../types";

type TChatFileType = "type" | "file ";
type TRole = "admin" | "regular";

type TChatFile = {
  id: number;
  user_id: number;
  path: string;
  filename: string;
  content_type: string;
  content_size: number;
  upload_date: string;
};

export type TGetChatFilesResponse = {
  id: number;
  user_id: number;
  chat_id: number;
  time: string;
  type: TChatFileType;
  content: string;
  file?: TChatFile;
};

export type TChatUser = TUser & { role: TRole };

export type TGetNewMessagesResponse = {
  unread_count: number;
};

export type TUpdateUsersRequest = {
  users: number[];
  chatId: number;
};
