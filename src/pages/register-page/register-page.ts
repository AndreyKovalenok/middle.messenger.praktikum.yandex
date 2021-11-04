import { RegisterForm } from "features/auth";
import { Block, compile } from "shared/lib";

import { template } from "./register-page.tmpl";

type Props = {};

export class RegisterPage extends Block<Props> {
  constructor() {
    super({});
  }

  render() {
    const registerForm = new RegisterForm();

    return compile(template, {
      registerForm,
    });
  }
}
