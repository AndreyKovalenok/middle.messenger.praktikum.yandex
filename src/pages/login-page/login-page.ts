import Handlebars from "handlebars";

import { AuthForm } from "features/auth";
import { Block } from "shared/utils";

import { template } from "./login-page.tmpl";

type TComponents = "authForm";

export class LoginPage extends Block<any, TComponents> {
  constructor() {
    super(
      {},
      {
        authForm: new AuthForm({
          value: "312",
        }).getContent(),
      }
    );
  }

  render() {
    return template;
  }
}
