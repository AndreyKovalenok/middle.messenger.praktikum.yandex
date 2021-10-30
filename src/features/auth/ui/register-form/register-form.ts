import { Block } from "shared/utils";

import { InputField, PrimaryButton, Link } from "shared/ui";

type Props = {};

type RenderProps = {
  emailInput: any;
  loginInput: any;
  nameInput: any;
  surnameInput: any;
  phoneInput: any;
  passwordInput: any;
  repeatPasswordInput: any;
  submitButton: any;
  loginLink: any;
};

export class RegisterForm extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      emailInput: new InputField({
        label: "Почта",
        type: "email",
        value: "pochta@yandex.ru",
        placeholder: "Введите почту",
        name: "email",
        onChange: () => {
          console.log("change");
        },
      }),
      loginInput: new InputField({
        label: "Логин",
        type: "text",
        value: "ivanivanov",
        placeholder: "Введите логин",
        name: "login",
        onChange: () => {
          console.log("change");
        },
      }),
      nameInput: new InputField({
        label: "Имя",
        type: "text",
        value: "Иван",
        placeholder: "Введите ваше имя",
        name: "first_name",
        onChange: () => {
          console.log("change");
        },
      }),
      surnameInput: new InputField({
        label: "Фамилия",
        type: "text",
        value: "Иванов",
        placeholder: "Введите вашу фамилию",
        name: "second_name",
        onChange: () => {
          console.log("change");
        },
      }),
      phoneInput: new InputField({
        label: "Телефон",
        type: "tel",
        value: "+7 (909) 967 30 30",
        placeholder: "Введите номер телефона",
        name: "phone",
        onChange: () => {
          console.log("change");
        },
      }),
      passwordInput: new InputField({
        label: "Пароль",
        type: "password",
        value: "qwerty",
        placeholder: "Введите пароль",
        error: true,
        name: "password",
        onChange: () => {
          console.log("change");
        },
      }),
      repeatPasswordInput: new InputField({
        label: "Пароль (ещё раз)",
        type: "password",
        value: "qwerty",
        placeholder: "Повторите пароль",
        error: true,
        errorMessage: "Пароли не совпадают",
        name: "repeat_password",
        onChange: () => {
          console.log("change");
        },
      }),
      submitButton: new PrimaryButton({
        children: "Зарегистрироваться",
        onClick: () => {
          console.log("click");
        },
      }),
      loginLink: new Link({
        href: "/auth",
        children: "Войти",
      }),
    });
  }
}
