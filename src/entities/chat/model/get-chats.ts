import { api } from "shared/api";

const chatsApi = new api.chats.Chats();

export const getChats = () => chatsApi.get();
