import { InputField, PrimaryButton, Link } from "shared/ui";
import { Block, compile } from "shared/lib";

import { template } from "./auth-form.tmpl";
import type { TAuthForm } from "../../types";
import { authValidator } from "./validator";

const initialValues: TAuthForm = {
  login: "",
  password: "",
};

type Props = {
  values: TAuthForm;
  errors: Partial<TAuthForm>;
  touched: Partial<Record<keyof TAuthForm, boolean>>;
};

export class AuthForm extends Block<Props> {
  focus: {
    name: keyof TAuthForm | null;
    caretPosition: number | null;
  };

  constructor() {
    super(
      {
        values: initialValues,
        errors: {},
        touched: {},
      },
      "form"
    );

    this.focus = {
      caretPosition: null,
      name: null,
    };
  }

  componentDidRender = () => {
    const inputs = this.getContent().querySelectorAll("input");
    inputs.forEach((input) => {
      if (input.name === this.focus.name) {
        input.focus();
        input.selectionStart = this.focus.caretPosition;
      }
    });
  };

  render() {
    const loginInput = new InputField({
      label: "Логин",
      type: "text",
      value: this.props.values.login,
      placeholder: "Введите логин",
      name: "login",
      errorMessage: this.props.errors.login,
      onChange: (evt) => {
        this.setProps({
          ...this.props,
          values: {
            ...this.props.values,
            login: (<HTMLInputElement>evt.target).value,
          },
        });
        this.focus.caretPosition = (<HTMLInputElement>(
          evt.target
        )).selectionStart;

        const errors = authValidator(this.props.values);

        if (errors) {
          this.setProps({
            ...this.props,
            errors: {
              ...errors,
            },
          });
        }
      },
      onBlur: (evt) => {
        this.focus.caretPosition = (<HTMLInputElement>(
          evt.target
        )).selectionStart;
      },
      onFocus: () => {
        this.focus.name = "login";
      },
    });

    const passwordInput = new InputField({
      label: "Пароль",
      type: "password",
      value: this.props.values.password,
      placeholder: "Введите пароль",
      name: "password",
      errorMessage: this.props.errors.password,
      onChange: (evt) => {
        this.setProps({
          ...this.props,
          values: {
            ...this.props.values,
            password: (<HTMLInputElement>evt.target).value,
          },
        });
        this.focus.caretPosition = (<HTMLInputElement>(
          evt.target
        )).selectionStart;

        const errors = authValidator(this.props.values);

        if (errors) {
          this.setProps({
            ...this.props,
            errors: {
              ...errors,
            },
          });
        }
      },
      onBlur: (evt) => {
        this.focus.caretPosition = (<HTMLInputElement>(
          evt.target
        )).selectionStart;
      },
      onFocus: () => {
        this.focus.name = "password";
      },
    });

    const submitButton = new PrimaryButton({
      children: "Авторизоваться",
      onClick: () => {
        this.focus = {
          caretPosition: null,
          name: null,
        };
        const errors = authValidator(this.props.values);

        this.setProps({ ...this.props, errors: { ...errors } });

        if (Object.keys(errors).length === 0) {
          console.log(this.props.values);
        }
      },
    });

    const registrationLink = new Link({
      href: "/registration",
      children: "Нет аккаунта?",
    });

    return compile(template, {
      loginInput,
      passwordInput,
      submitButton,
      registrationLink,
    });
  }
}
