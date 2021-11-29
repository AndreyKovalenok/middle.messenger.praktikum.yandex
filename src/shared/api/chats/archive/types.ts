type TUser = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

type TLastMessage = {
  user: TUser;
  time: string;
  content: string;
};

export type TArchiveChatsRequestResponse = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: TLastMessage;
};

export type TArchiveChatReqestPayload = {
  chatId: number;
};
