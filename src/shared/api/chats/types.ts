export type TChatPostPayload = {
  title: string;
};

export type TUser = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

export type TChatMessage = {
  user: TUser;
  time: string;
  content: string;
};

export type TGetCahtsResponse = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: TChatMessage;
};

export type TChatDeletePayload = {
  chatId: number;
};

type TChatFileType = "type" | "file ";

type TChatFile = {
  id: number;
  user_id: number;
  path: string;
  filename: string;
  content_type: string;
  content_size: number;
  upload_date: string;
};

export type TGetChatFilesRequest = {
  id: string;
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
