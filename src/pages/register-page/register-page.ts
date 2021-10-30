import { RegisterForm } from "features/auth";
import { Block } from "shared/utils";

import { template } from "./register-page.tmpl";

type Props = {};

type RenderProps = {
  registerForm: any;
};

export class RegisterPage extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({ ...props, registerForm: new RegisterForm({}) });
  }

  render() {
    return this.compile(template);
  }
}
