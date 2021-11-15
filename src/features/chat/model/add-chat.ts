import { api } from "shared/api";

const chatsApi = new api.chats.Chats();

export const addChat = async (title: string) => {
  await chatsApi.post({ title });
};
