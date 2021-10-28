import { InputField, PrimaryButton, Link } from "shared/ui";
import { Block } from "shared/utils";

import { template } from "./auth-form.tmpl";

type Props = {
  value: string;
};

type RenderProps = {
  loginInput: any;
  passwordInput: any;
  submitButton: any;
  registrationLink: any;
};
export class AuthForm extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      loginInput: new InputField({
        label: "Логин",
        type: "text",
        value: props.value,
        placeholder: "Введите логин",
        name: "login",
        onChange: () => {
          console.log("change");
        },
      }),
      passwordInput: new InputField({
        label: "Пароль",
        type: "password",
        value: "qwerty",
        placeholder: "Введите пароль",
        name: "password",
        onChange: () => {
          console.log("change");
        },
      }),
      submitButton: new PrimaryButton({
        children: "Авторизоваться",
        onClick: () => {
          console.log("click");
        },
      }),
      registrationLink: new Link({
        href: "/registration",
        children: "Нет аккаунта?",
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
