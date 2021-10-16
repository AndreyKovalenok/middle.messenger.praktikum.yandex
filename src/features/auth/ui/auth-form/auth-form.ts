import Handlebars from "handlebars";

import { Input, PrimaryButton, Link } from "shared/ui";

import { template } from "./auth-form.tmpl";

const render = Handlebars.compile<RenderProps>(template);

const LoginInput = Input({
  label: "Логин",
  type: "text",
  value: "ivanivanov",
  placeholder: "Введите логин",
  name: "login",
});

const PasswordInput = Input({
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

type RenderProps = {
  loginInput: string;
  passwordInput: string;
  submitButton: string;
  registrationLink: string;
};

export const AuthForm = () =>
  render({
    loginInput: LoginInput,
    passwordInput: PasswordInput,
    submitButton: SubmitButton,
    registrationLink: RegistrationLink,
  });
