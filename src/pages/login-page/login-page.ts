import Handlebars from "handlebars";

import { AuthForm } from "features/auth";

import { template } from "./login-page.tmpl";

type RenderProps = {
  authForm: string;
};

const render = Handlebars.compile<RenderProps>(template);

export const LoginPage = () =>
  render({
    authForm: AuthForm(),
  });
