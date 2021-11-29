import { api } from "shared/api";

const chatsApi = new api.chats.Chats();

export const token = async (id: string) => chatsApi.token(id);
