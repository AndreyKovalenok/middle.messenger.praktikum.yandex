import { AuthForm } from "features/auth";
import { Block } from "shared/utils";

import { template } from "./login-page.tmpl";

type RenderProps = {
  authForm: any;
};

export class LoginPage extends Block<RenderProps> {
  constructor() {
    super({
      authForm: new AuthForm({}),
    });
  }

  render() {
    return this.compile(template);
  }
}
