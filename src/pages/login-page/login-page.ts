import { AuthForm } from "features/auth";
import { BlockV2, compile } from "shared/utils";

import { template } from "./login-page.tmpl";

export class LoginPage extends BlockV2 {
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
