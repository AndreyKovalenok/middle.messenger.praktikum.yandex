import { api } from "shared/api";

const chatApi = new api.chats.Chat();

export const deleteUser = async (chatId: number, userId: number) => {
  await chatApi.deleteUsersFromChat({ chatId, users: [userId] });
};
