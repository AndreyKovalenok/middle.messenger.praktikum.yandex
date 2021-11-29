import { api } from "shared/api";

const chatsApi = new api.chats.Chats();

export const addChat = async (title: string) => chatsApi.post({ title });
