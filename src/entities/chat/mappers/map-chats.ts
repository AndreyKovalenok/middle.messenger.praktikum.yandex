import type { TGetChatsResponse } from "shared/api/chats";
import type { TChatItem } from "../types";

export const mapChats = (chats: TGetChatsResponse[]): TChatItem[] =>
  chats.map((chat) => ({
    avatar: chat.avatar ?? "",
    id: String(chat.id),
    unreadMessages: chat.unread_count,
    message: chat.last_message?.content ?? "",
    time: chat.last_message?.time ?? "",
    title: chat.title,
  }));
