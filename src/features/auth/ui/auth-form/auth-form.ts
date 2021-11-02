import { InputField, PrimaryButton, Link } from "shared/ui";
import { Block } from "shared/utils";

import { template } from "./auth-form.tmpl";
import type { TAuthForm } from "../../types";
import { authValidator } from "./validator";

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
  errors: Partial<Record<keyof TAuthForm, string>>;
  touched: Partial<Record<keyof TAuthForm, boolean>>;

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
          this.validateInput("login", "loginInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            login: true,
          };
          this.validateInput("login", "loginInput");
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
          this.validateInput("password", "passwordInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            password: true,
          };

          this.validateInput("password", "passwordInput");
        },
      }),
      submitButton: new PrimaryButton({
        children: "Авторизоваться",
        onClick: () => {
          this.errors = authValidator(this.form);

          this.touched = Object.keys(this.form).reduce(
            (acc, cur) => ({
              ...acc,
              [cur]: true,
            }),
            {}
          );

          this.validateInput("login", "loginInput");
          this.validateInput("password", "passwordInput");

          if (Object.keys(this.errors).length === 0) {
            console.log(this.form);
          }
        },
      }),
      registrationLink: new Link({
        href: "/registration",
        children: "Нет аккаунта?",
      }),
    });

    this.form = initialValues;
    this.errors = {};
    this.touched = {};
  }

  validateInput(name: keyof TAuthForm, input: string) {
    this.errors = authValidator(this.form);

    const component = this.children[input].element;
    if (!component) {
      return;
    }

    const inputNode = component.querySelector("input");

    if (!inputNode) {
      return;
    }

    const nextElement = inputNode.nextElementSibling;
    if (!nextElement) {
      return;
    }

    if (this.touched[name] && this.errors[name]) {
      nextElement.textContent = this.errors[name] as string;
    } else {
      nextElement.textContent = "";
    }
  }

  render() {
    return this.compile(template);
  }
}
