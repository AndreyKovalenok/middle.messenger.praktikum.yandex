import { Block } from "shared/utils";

import { InputField, PrimaryButton, Link } from "shared/ui";

import { template } from "./register-form.tmpl";
import type { TRegisterForm } from "../../types";
import { registerValidator } from "./validator";

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
  errors: Partial<Record<keyof TRegisterForm, string>>;
  touched: Partial<Record<keyof TRegisterForm, boolean>>;

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

          this.validateInput("email", "emailInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            email: true,
          };

          this.validateInput("email", "emailInput");
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

          this.validateInput("first_name", "nameInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            first_name: true,
          };

          this.validateInput("first_name", "nameInput");
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

          this.validateInput("second_name", "surnameInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            second_name: true,
          };

          this.validateInput("second_name", "surnameInput");
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

          this.validateInput("phone", "phoneInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            phone: true,
          };

          this.validateInput("phone", "phoneInput");
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
      repeatPasswordInput: new InputField({
        label: "Пароль (ещё раз)",
        type: "password",
        value: initialValues.repeat_password,
        placeholder: "Повторите пароль",
        name: "repeat_password",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            repeat_password: (<HTMLInputElement>evt.target).value,
          };

          this.validateInput("repeat_password", "repeatPasswordInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            repeat_password: true,
          };

          this.validateInput("repeat_password", "repeatPasswordInput");
        },
      }),
      submitButton: new PrimaryButton({
        children: "Зарегистрироваться",
        onClick: () => {
          this.touched = Object.keys(this.form).reduce(
            (acc, cur) => ({
              ...acc,
              [cur]: true,
            }),
            {}
          );

          this.validateInput("email", "emailInput");
          this.validateInput("login", "loginInput");
          this.validateInput("first_name", "nameInput");
          this.validateInput("second_name", "surnameInput");
          this.validateInput("phone", "phoneInput");
          this.validateInput("password", "passwordInput");
          this.validateInput("repeat_password", "repeatPasswordInput");

          if (Object.keys(this.errors).length === 0) {
            console.log(this.form);
          }
        },
      }),
      loginLink: new Link({
        href: "/auth",
        children: "Войти",
      }),
    });

    this.form = initialValues;
    this.errors = {};
    this.touched = {};
  }

  validateInput(name: keyof TRegisterForm, input: string) {
    this.errors = registerValidator(this.form);

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
