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
  } catch (error) {
    console.error(error.response);
    if (error.status === 401) {
      return true;
    }

    return false;
  }
};

const signInGuard = async () => {
  try {
    const res = await authModel.getUser();

    return true;
  } catch (error) {
    console.error(error.response);
    Router.go(ROUTES.signIn);
    return false;
  }
};

Router.use(ROUTES.signIn, LoginPage, loggedInGuard)
  .use(ROUTES.signUp, RegisterPage, loggedInGuard)
  .use(ROUTES.settings, ProfilePage, signInGuard)
  .use(ROUTES.messenger, ChatPage, signInGuard)
  .use(ROUTES.notFound, Page404)
  .use(ROUTES.serverError, Page500)
  .guard(async () => {
    if (!routes.includes(window.location.pathname)) {
      Router.go(ROUTES.notFound);
      return false;
    }

    return true;
  })
  .start();
