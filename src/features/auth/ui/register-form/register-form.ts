import Handlebars from "handlebars";

import { Input, PrimaryButton, Link } from "shared/ui";

import { template } from "./register-form.tmpl";

const EmailInput = Input({
  label: "Почта",
  type: "email",
  value: "pochta@yandex.ru",
  placeholder: "Введите почту",
  name: "email",
});

const LoginInput = Input({
  label: "Логин",
  type: "text",
  value: "ivanivanov",
  placeholder: "Введите логин",
  name: "login",
});

const NameInput = Input({
  label: "Имя",
  type: "text",
  value: "Иван",
  placeholder: "Введите ваше имя",
  name: "first_name",
});
const SurnameInput = Input({
  label: "Фамилия",
  type: "text",
  value: "Иванов",
  placeholder: "Введите вашу фамилию",
  name: "second_name",
});

const PhoneInput = Input({
  label: "Телефон",
  type: "tel",
  value: "+7 (909) 967 30 30",
  placeholder: "Введите номер телефона",
  name: "phone",
});

const PasswordInput = Input({
  label: "Пароль",
  type: "password",
  value: "qwerty",
  placeholder: "Введите пароль",
  error: true,
  name: "password",
});

const RepeatPasswordInput = Input({
  label: "Пароль (ещё раз)",
  type: "password",
  value: "qwerty",
  placeholder: "Повторите пароль",
  error: true,
  errorMessage: "Пароли не совпадают",
  name: "repeat_password",
});

const SubmitButton = PrimaryButton({
  children: "Зарегистрироваться",
});

const LoginLink = Link({
  href: "/auth",
  children: "Войти",
});

const render = Handlebars.compile<RenderProps>(template);

type RenderProps = {
  emailInput: string;
  loginInput: string;
  nameInput: string;
  surnameInput: string;
  phoneInput: string;
  passwordInput: string;
  repeatPasswordInput: string;
  submitButton: string;
  loginLink: string;
};

export const RegisterForm = () =>
  render({
    emailInput: EmailInput,
    loginInput: LoginInput,
    nameInput: NameInput,
    surnameInput: SurnameInput,
    phoneInput: PhoneInput,
    passwordInput: PasswordInput,
    repeatPasswordInput: RepeatPasswordInput,
    submitButton: SubmitButton,
    loginLink: LoginLink,
  });
