import { InputField, PrimaryButton, Link } from "shared/ui";
import { Block, compile } from "shared/lib";

import { template } from "./auth-form.tmpl";
import type { TAuthForm } from "../../types";
import { authValidator } from "./validator";
import { signin } from "../../model";

const initialValues: TAuthForm = {
  login: "",
  password: "",
};

type Props = {
  values: TAuthForm;
  errors: Partial<TAuthForm>;
  touched: Partial<Record<keyof TAuthForm, boolean>>;
  isLoading: boolean;
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
        isLoading: false,
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

  private inputChangeHandler(
    name: keyof TAuthForm,
    value: string,
    selectionStart: number | null
  ) {
    this.setProps({
      ...this.props,
      values: {
        ...this.props.values,
        [name]: value,
      },
    });
    this.focus.caretPosition = selectionStart;

    const errors = authValidator(this.props.values);
    this.setProps({
      ...this.props,
      errors: {
        ...errors,
      },
    });
  }

  private focusHandler(name: keyof TAuthForm) {
    this.focus.name = name;
    if (!this.props.touched[name]) {
      this.setProps({
        ...this.props,
        touched: {
          ...this.props.touched,
          [name]: true,
        },
      });
    }
  }

  render() {
    const loginInput = new InputField({
      label: "Логин",
      type: "text",
      value: this.props.values.login,
      errorMessage: this.props.errors.login,
      touched: this.props.touched.login,
      placeholder: "Введите логин",
      name: "login",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler("login", target.value, target.selectionStart);
      },
      onBlur: (evt) => {
        this.focus.caretPosition = (<HTMLInputElement>(
          evt.target
        )).selectionStart;
      },
      onFocus: () => {
        this.focusHandler("login");
      },
    });

    const passwordInput = new InputField({
      label: "Пароль",
      type: "password",
      value: this.props.values.password,
      errorMessage: this.props.errors.password,
      touched: this.props.touched.password,
      placeholder: "Введите пароль",
      name: "password",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler(
          "password",
          target.value,
          target.selectionStart
        );
      },
      onBlur: (evt) => {
        this.focus.caretPosition = (<HTMLInputElement>(
          evt.target
        )).selectionStart;
      },
      onFocus: () => {
        this.focusHandler("password");
      },
    });

    const submitButton = new PrimaryButton({
      children: "Авторизоваться",
      isLoading: this.props.isLoading,
      onClick: async () => {
        this.focus = {
          caretPosition: null,
          name: null,
        };
        const errors = authValidator(this.props.values);

        this.setProps({
          ...this.props,
          errors: { ...errors },
          touched: Object.keys(this.props.values).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {}
          ),
        });

        if (Object.keys(errors).length === 0) {
          this.setProps({ ...this.props, isLoading: true });

          const { login, password } = this.props.values;

          await signin({
            login,
            password,
          });

          this.setProps({ ...this.props, isLoading: false });
        }
      },
    });

    const registrationLink = new Link({
      href: "/sign-up",
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
