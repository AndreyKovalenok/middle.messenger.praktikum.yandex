import type { TGetChatsResponse } from "shared/api/chats";
import type { TChatItem } from "../types";

export const mapChats = (chats: TGetChatsResponse[]): TChatItem[] =>
  chats.map((chat) => ({
    avatar: chat.avatar,
    id: String(chat.id),
    message: chat.last_message.content,
    time: chat.last_message.time,
    title: chat.last_message.user.login,
    unreadMessages: chat.unread_count,
  }));
