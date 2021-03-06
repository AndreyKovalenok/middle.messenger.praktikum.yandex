import { Block, compile } from "shared/lib";
import { InputField, PrimaryButton, Link } from "shared/ui";

import { template } from "./register-form.tmpl";
import type { TRegisterForm } from "../../types";
import { registerValidator } from "./validator";
import { signup } from "../../model";

const initialValues: TRegisterForm = {
  email: "",
  login: "",
  first_name: "",
  second_name: "",
  password: "",
  phone: "",
  repeat_password: "",
};

type Props = {
  values: TRegisterForm;
  errors: Partial<Record<keyof TRegisterForm, string>>;
  touched: Partial<Record<keyof TRegisterForm, boolean>>;
  isSubmitting: boolean;
};

export class RegisterForm extends Block<Props> {
  focus: {
    name: keyof TRegisterForm | null;
    caretPosition: number | null;
  };

  constructor() {
    super(
      {
        values: initialValues,
        errors: {},
        touched: {},
        isSubmitting: false,
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
    name: keyof TRegisterForm,
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

    const errors = registerValidator(this.props.values);
    this.setProps({
      ...this.props,
      errors: {
        ...errors,
      },
    });
  }

  private focusHandler(name: keyof TRegisterForm) {
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
    const emailInput = new InputField({
      label: "??????????",
      type: "text",
      value: this.props.values.email,
      errorMessage: this.props.errors.email,
      touched: this.props.touched.email,
      placeholder: "?????????????? ??????????",
      name: "email",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler("email", target.value, target.selectionStart);
      },
      onBlur: (evt) => {
        const target = <HTMLInputElement>evt.target;
        this.focus.caretPosition = target.selectionStart;
      },
      onFocus: () => {
        this.focusHandler("email");
      },
    });
    const loginInput = new InputField({
      label: "??????????",
      type: "text",
      value: this.props.values.login,
      errorMessage: this.props.errors.login,
      touched: this.props.touched.login,
      placeholder: "?????????????? ??????????",
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
    const nameInput = new InputField({
      label: "??????",
      type: "text",
      value: this.props.values.first_name,
      errorMessage: this.props.errors.first_name,
      touched: this.props.touched.first_name,
      placeholder: "?????????????? ???????? ??????",
      name: "first_name",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler(
          "first_name",
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
        this.focusHandler("first_name");
      },
    });
    const surnameInput = new InputField({
      label: "??????????????",
      type: "text",
      value: this.props.values.second_name,
      errorMessage: this.props.errors.second_name,
      touched: this.props.touched.second_name,
      placeholder: "?????????????? ???????? ??????????????",
      name: "second_name",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler(
          "second_name",
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
        this.focusHandler("second_name");
      },
    });
    const phoneInput = new InputField({
      label: "??????????????",
      type: "tel",
      value: this.props.values.phone,
      errorMessage: this.props.errors.phone,
      touched: this.props.touched.phone,
      placeholder: "?????????????? ?????????? ????????????????",
      name: "phone",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler("phone", target.value, target.selectionStart);
      },
      onBlur: (evt) => {
        this.focus.caretPosition = (<HTMLInputElement>(
          evt.target
        )).selectionStart;
      },
      onFocus: () => {
        this.focusHandler("phone");
      },
    });
    const passwordInput = new InputField({
      label: "????????????",
      type: "password",
      value: this.props.values.password,
      errorMessage: this.props.errors.password,
      touched: this.props.touched.password,
      placeholder: "?????????????? ????????????",
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
    const repeatPasswordInput = new InputField({
      label: "???????????? (?????? ??????)",
      type: "password",
      value: this.props.values.repeat_password,
      errorMessage: this.props.errors.repeat_password,
      touched: this.props.touched.repeat_password,
      placeholder: "?????????????????? ????????????",
      name: "repeat_password",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler(
          "repeat_password",
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
        this.focusHandler("repeat_password");
      },
    });
    const submitButton = new PrimaryButton({
      children: "????????????????????????????????????",
      isLoading: this.props.isSubmitting,
      onClick: async () => {
        const errors = registerValidator(this.props.values);
        this.setProps({
          ...this.props,
          errors: {
            ...errors,
          },
          touched: Object.keys(this.props.values).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {}
          ),
        });

        if (Object.keys(errors).length === 0) {
          this.setProps({
            ...this.props,
            isSubmitting: true,
          });

          try {
            await signup(this.props.values);

            this.setProps({
              ...this.props,
              isSubmitting: false,
            });
          } catch (error) {
            this.setProps({
              ...this.props,
              isSubmitting: false,
            });
          }
        }
      },
    });
    const loginLink = new Link({
      href: "/login",
      children: "??????????",
    });

    return compile(template, {
      emailInput,
      loginInput,
      nameInput,
      surnameInput,
      phoneInput,
      passwordInput,
      repeatPasswordInput,
      submitButton,
      loginLink,
    });
  }
}
