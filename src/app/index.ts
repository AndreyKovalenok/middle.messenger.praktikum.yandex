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

const loggedInGuard = async () => {
  try {
    const res = await authModel.getUser();
    if (res?.id) {
      Router.go(ROUTES.messenger);
      return false;
    }

    return true;
  } catch (error: any) {
    console.error(error.response);
    if (error.status === 401) {
      return true;
    }

    return false;
  }
};

const signInGuard = async () => {
  try {
    await authModel.getUser();

    return true;
  } catch (error: any) {
    console.error(error.response);
    Router.go(ROUTES.signIn);
    return false;
  }
};

//@ts-ignore
Router.use(ROUTES.signIn, LoginPage, loggedInGuard)
  //@ts-ignore
  .use(ROUTES.signUp, RegisterPage, loggedInGuard)
  //@ts-ignore
  .use(ROUTES.settings, ProfilePage, signInGuard)
  //@ts-ignore
  .use(ROUTES.messenger, ChatPage, signInGuard)
  //@ts-ignore
  .use(ROUTES.notFound, Page404)
  //@ts-ignore
  .use(ROUTES.serverError, Page500)
  //@ts-ignore
  .guard(async () => {
    if (window.location.pathname === "/") {
      Router.go(ROUTES.signIn);
      return false;
    }

    if (!routes.includes(window.location.pathname)) {
      Router.go(ROUTES.notFound);
      return false;
    }

    return true;
  })
  .start();
