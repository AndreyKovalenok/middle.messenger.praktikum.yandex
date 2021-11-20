import { api } from "shared/api";

const userApi = new api.auth.User();

export const getUser = () => userApi.get();
