import Handlebars from "handlebars";

import { Input, PrimaryButton, Link } from "shared/ui";
import { Block } from "shared/utils";

import { template } from "./auth-form.tmpl";

const PasswordInput = new Input({
  label: "Пароль",
  type: "password",
  value: "qwerty",
  placeholder: "Введите пароль",
  name: "password",
});

const SubmitButton = PrimaryButton({
  children: "Авторизоваться",
});

const RegistrationLink = Link({
  href: "/registration",
  children: "Нет аккаунта?",
});

type TComponent = "loginInput";
const input = new Input({
  label: "Логин",
  type: "text",
  value: "ivanivanov",
  placeholder: "Введите логин",
  name: "login",
  events: {
    click: function () {
      console.log(`input.props`, input.props.events);
      input.setProps({
        ...input.props,
        label: "123",
      });
    },
  },
});

type Props = {
  value: string;
};

type RenderProps = {
  loginInput: string;
  passwordInput: string;
  submitButton: string;
  registrationLink: string;
};
export class AuthForm extends Block<Props, TComponent> {
  constructor(props: Props) {
    super(props, {
      loginInput: new Input({
        label: "Логин",
        type: "text",
        value: props.value,
        placeholder: "Введите логин",
        name: "login",
        events: {
          click: () => {
            this.setProps({
              ...this.props,
              value: "123",
            });
          },
        },
      }).getContent(),
    });
  }

  render() {
    return template;
  }
}
