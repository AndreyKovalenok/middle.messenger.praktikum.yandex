import { registerPartials } from "shared/lib";
import { router } from "shared/utils";
import {
  LoginPage,
  RegisterPage,
  ChatPage,
  Page404,
  Page500,
  ProfilePage,
} from "pages";

import "./style/style.scss";

registerPartials();

router
  .use("/login", LoginPage)
  .use("/registration", RegisterPage)
  .use("/profile", ProfilePage)
  .use("/chats", ChatPage)
  .use("/404", Page404)
  .use("/500", Page500)
  .start();
