import { InputField, PrimaryButton, Link } from "shared/ui";
import { Block } from "shared/utils";

import { template } from "./auth-form.tmpl";

const PasswordInput = new InputField({
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

type Props = {
  value: string;
};

type RenderProps = {
  loginInput: any;
  // passwordInput: string;
  // submitButton: string;
  // registrationLink: string;
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
        events: {
          input: function (evt: any) {
            console.log(this);
          },
        },
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
