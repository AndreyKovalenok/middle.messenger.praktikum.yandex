import { api } from "shared/api";

const userApi = new api.user.User();

export const getUserData = (id: string) => userApi.getUser(id);
