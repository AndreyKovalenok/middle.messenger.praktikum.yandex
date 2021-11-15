import { api } from "shared/api";

const chatApi = new api.chats.Chat();

export const addUser = async (chatId: number, userId: number) => {
  await chatApi.addUsersToChat({ chatId, users: [userId] });
};
