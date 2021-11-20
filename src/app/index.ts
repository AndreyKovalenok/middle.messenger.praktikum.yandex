import { registerPartials } from "shared/lib";
import { ROUTES } from "shared/config";
import Router from "shared/lib/router";
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

Router.use(ROUTES.signIn, LoginPage)
  .use(ROUTES.signUp, RegisterPage)
  .use(ROUTES.settings, ProfilePage)
  .use(ROUTES.messenger, ChatPage)
  .use(ROUTES.notFound, Page404)
  .use(ROUTES.serverError, Page500)
  .guard(async () => {
    if (!availableRoutes.includes(window.location.pathname)) {
      const res = await authModel.getUser();
      if (res.reason === "Cookie is not valid") {
        Router.go(ROUTES.signIn);
        return false;
      }

      if (window.location.pathname !== ROUTES.notFound) {
        if (!routes.includes(window.location.pathname)) {
          Router.go(ROUTES.notFound);
          return false;
        }
      }

      return true;
    }

    if (loginRoutes.includes(window.location.pathname)) {
      const res = await authModel.getUser();
      if (res?.id) {
        Router.go(ROUTES.messenger);
        return false;
      }

      return true;
    }

    return true;
  })
  .start();
