import Handlebars from "handlebars";

import { RegisterForm } from "features/auth";

import { template } from "./register-page.tmpl";

type RenderProps = {
  registerForm: string;
};

const render = Handlebars.compile<RenderProps>(template);

export const RegisterPage = () =>
  render({
    registerForm: RegisterForm(),
  });
