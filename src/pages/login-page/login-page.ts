import { AuthForm } from "features/auth";
import { Block, compile } from "shared/lib";

import { template } from "./login-page.tmpl";

export class LoginPage extends Block {
  constructor() {
    super({});
  }

  render() {
    const authForm = new AuthForm();

    return compile(template, {
      authForm,
    });
  }
}
