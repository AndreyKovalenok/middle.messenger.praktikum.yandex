import * as authApi from "./auth";
import * as chatsApi from "./chats";
import * as userApi from "./users";

export const api = {
  auth: authApi,
  chats: chatsApi,
  user: userApi,
};
