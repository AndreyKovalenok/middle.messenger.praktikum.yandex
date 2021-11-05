import { Router, registerPartials } from "shared/lib";
import {
  LoginPage,
  RegisterPage,
  ChatPage,
  Page404,
  Page500,
  ProfilePage,
} from "pages";

import "./style/style.scss";

const ROOT_QUERY = "#root";

registerPartials();

const router = new Router(ROOT_QUERY);

router
  .use("/login", new LoginPage())
  .use("/registration", new RegisterPage())
  .use("profile", new ProfilePage())
  .use("/chats", new ChatPage())
  .use("/404", new Page404())
  .use("/500", new Page500())
  .start();