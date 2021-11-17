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

import { authModel } from "features/auth";

import "./style/style.scss";

registerPartials();

const routes = [
  "/login",
  "/sign-up",
  "/404",
  "/500",
  "/messenger",
  "/settings",
];
const availableRoutes = ["/login", "/sign-up", "/404", "/500"];
const loginRoutes = ["/login", "/sign-up"];

router
  .use("/login", LoginPage)
  .use("/sign-up", RegisterPage)
  .use("/settings", ProfilePage)
  .use("/messenger", ChatPage)
  .use("/404", Page404)
  .use("/500", Page500)
  .guard(async () => {
    if (window.location.pathname !== "/404") {
      if (!routes.includes(window.location.pathname)) {
        router.go("/404");
        return false;
      }
    }

    if (!availableRoutes.includes(window.location.pathname)) {
      const res = await authModel.getUser();
      if (res.reason === "Cookie is not valid") {
        router.go("/login");
        return false;
      }

      return true;
    }

    if (loginRoutes.includes(window.location.pathname)) {
      const res = await authModel.getUser();
      if (res?.id) {
        router.go("/messenger");
        return false;
      }

      return true;
    }

    return true;
  })
  .start();
