import { Block } from "shared/utils";

import { InputField, PrimaryButton, Link } from "shared/ui";

import { template } from "./register-form.tmpl";
import type { TRegisterForm } from "../../types";

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

const initialValues: TRegisterForm = {
  email: "",
  login: "",
  first_name: "",
  second_name: "",
  password: "",
  phone: "",
  repeat_password: "",
};

export class RegisterForm extends Block<Props, RenderProps> {
  form: TRegisterForm;

  constructor(props: Props) {
    super({
      ...props,
      emailInput: new InputField({
        label: "Почта",
        type: "email",
        value: initialValues.email,
        placeholder: "Введите почту",
        name: "email",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            email: (<HTMLInputElement>evt.target).value,
          };
        },
      }),
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
      nameInput: new InputField({
        label: "Имя",
        type: "text",
        value: initialValues.first_name,
        placeholder: "Введите ваше имя",
        name: "first_name",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            first_name: (<HTMLInputElement>evt.target).value,
          };
        },
      }),
      surnameInput: new InputField({
        label: "Фамилия",
        type: "text",
        value: initialValues.second_name,
        placeholder: "Введите вашу фамилию",
        name: "second_name",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            second_name: (<HTMLInputElement>evt.target).value,
          };
        },
      }),
      phoneInput: new InputField({
        label: "Телефон",
        type: "tel",
        value: initialValues.phone,
        placeholder: "Введите номер телефона",
        name: "phone",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            phone: (<HTMLInputElement>evt.target).value,
          };
        },
      }),
      passwordInput: new InputField({
        label: "Пароль",
        type: "password",
        value: initialValues.password,
        placeholder: "Введите пароль",
        error: true,
        name: "password",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            password: (<HTMLInputElement>evt.target).value,
          };
        },
      }),
      repeatPasswordInput: new InputField({
        label: "Пароль (ещё раз)",
        type: "password",
        value: "qwerty",
        placeholder: initialValues.repeat_password,
        error: true,
        errorMessage: "Пароли не совпадают",
        name: "repeat_password",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            repeat_password: (<HTMLInputElement>evt.target).value,
          };
        },
      }),
      submitButton: new PrimaryButton({
        children: "Зарегистрироваться",
        onClick: () => {
          console.log(this.form);
        },
      }),
      loginLink: new Link({
        href: "/auth",
        children: "Войти",
      }),
    });

    this.form = initialValues;
  }

  render() {
    return this.compile(template);
  }
}
