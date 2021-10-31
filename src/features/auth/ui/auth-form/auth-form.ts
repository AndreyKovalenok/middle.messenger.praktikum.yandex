import { InputField, PrimaryButton, Link } from "shared/ui";
import { Block } from "shared/utils";

import { template } from "./auth-form.tmpl";
import type { TAuthForm } from "../../types";

type Props = {};

type RenderProps = {
  loginInput: any;
  passwordInput: any;
  submitButton: any;
  registrationLink: any;
};

const initialValues: TAuthForm = {
  login: "",
  password: "",
};
export class AuthForm extends Block<Props, RenderProps> {
  form: TAuthForm;

  constructor(props: Props) {
    super({
      ...props,
      loginInput: new InputField({
        label: "Логин",
        type: "text",
        value: initialValues.login,
        placeholder: "Введите логин",
        name: "login",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            login: (<HTMLInputElement>evt.target).value,
          };
        },
      }),
      passwordInput: new InputField({
        label: "Пароль",
        type: "password",
        value: initialValues.password,
        placeholder: "Введите пароль",
        name: "password",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            password: (<HTMLInputElement>evt.target).value,
          };
        },
      }),
      submitButton: new PrimaryButton({
        children: "Авторизоваться",
        onClick: () => {
          console.log(this.form);
        },
      }),
      registrationLink: new Link({
        href: "/registration",
        children: "Нет аккаунта?",
      }),
    });

    this.form = initialValues;
  }

  render() {
    return this.compile(template);
  }
}
