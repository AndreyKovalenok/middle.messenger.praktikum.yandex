import Handlebars from "handlebars";

import { InputField, PrimaryButton, Link } from "shared/ui";

import { template } from "./register-form.tmpl";

const EmailInput = new InputField({
  label: "Почта",
  type: "email",
  value: "pochta@yandex.ru",
  placeholder: "Введите почту",
  name: "email",
});

const LoginInput = new InputField({
  label: "Логин",
  type: "text",
  value: "ivanivanov",
  placeholder: "Введите логин",
  name: "login",
});

const NameInput = new InputField({
  label: "Имя",
  type: "text",
  value: "Иван",
  placeholder: "Введите ваше имя",
  name: "first_name",
});
const SurnameInput = new InputField({
  label: "Фамилия",
  type: "text",
  value: "Иванов",
  placeholder: "Введите вашу фамилию",
  name: "second_name",
});

const PhoneInput = new InputField({
  label: "Телефон",
  type: "tel",
  value: "+7 (909) 967 30 30",
  placeholder: "Введите номер телефона",
  name: "phone",
});

const PasswordInput = new InputField({
  label: "Пароль",
  type: "password",
  value: "qwerty",
  placeholder: "Введите пароль",
  error: true,
  name: "password",
});

const RepeatPasswordInput = new InputField({
  label: "Пароль (ещё раз)",
  type: "password",
  value: "qwerty",
  placeholder: "Повторите пароль",
  error: true,
  errorMessage: "Пароли не совпадают",
  name: "repeat_password",
});

const SubmitButton = new PrimaryButton({
  children: "Зарегистрироваться",
});

const LoginLink = new Link({
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
    emailInput: "",
    loginInput: "",
    nameInput: "",
    surnameInput: "",
    phoneInput: "",
    passwordInput: "",
    repeatPasswordInput: "",
    submitButton: "",
    loginLink: "",
  });
