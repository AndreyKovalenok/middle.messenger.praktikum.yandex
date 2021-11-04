import { Block, compile } from "shared/lib";
import { InputField, PrimaryButton } from "shared/ui";

import { template } from "./change-user-data-form.tmpl";
import type { TChangeUserDataForm } from "../../types";
import { changeUserDataValidator } from "./validator";
import * as styles from "./style.scss";

type Props = {
  values: TChangeUserDataForm;
  errors: Partial<TChangeUserDataForm>;
  touched: Partial<Record<keyof TChangeUserDataForm, boolean>>;
};
export class ChangeUserDataForm extends Block<Props> {
  focus: {
    name: keyof TChangeUserDataForm | null;
    caretPosition: number | null;
  };

  constructor(props: { values: TChangeUserDataForm }) {
    super(
      {
        ...props,
        errors: {},
        touched: {},
      },
      "div",
      {
        class: styles.wrapper,
      }
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
    name: keyof TChangeUserDataForm,
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

    const errors = changeUserDataValidator(this.props.values);
    this.setProps({
      ...this.props,
      errors: {
        ...errors,
      },
    });
  }

  private focusHandler(name: keyof TChangeUserDataForm) {
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
      type: "text",
      value: this.props.values.email,
      errorMessage: this.props.errors.email,
      touched: this.props.touched.email,
      placeholder: "Введите почту",
      name: "email",
      label: "Почта",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler("email", target.value, target.selectionStart);
      },
      onBlur: (evt) => {
        this.focus.caretPosition = (<HTMLInputElement>(
          evt.target
        )).selectionStart;
      },
      onFocus: () => {
        this.focusHandler("email");
      },
    });
    const loginInput = new InputField({
      type: "text",
      value: this.props.values.login,
      errorMessage: this.props.errors.login,
      touched: this.props.touched.login,
      placeholder: "Введите логин",
      name: "login",
      label: "Логин",
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
      type: "text",
      value: this.props.values.first_name,
      errorMessage: this.props.errors.first_name,
      touched: this.props.touched.first_name,
      placeholder: "Введите имя",
      name: "first_name",
      label: "Имя",
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
      type: "text",
      value: this.props.values.second_name,
      errorMessage: this.props.errors.second_name,
      touched: this.props.touched.second_name,
      placeholder: "Введите фамилию",
      name: "second_name",
      label: "Фамилия",
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
    const displayNameInput = new InputField({
      type: "text",
      value: this.props.values.display_name,
      errorMessage: this.props.errors.display_name,
      touched: this.props.touched.display_name,
      placeholder: "Введите имя в чате",
      name: "display_name",
      label: "Имя в чате",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler(
          "display_name",
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
        this.focusHandler("display_name");
      },
    });
    const phoneInput = new InputField({
      type: "tel",
      value: this.props.values.phone,
      errorMessage: this.props.errors.phone,
      touched: this.props.touched.phone,
      placeholder: "Введите телефон",
      name: "phone",
      label: "Телефон",
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
    const submitButton = new PrimaryButton({
      children: "Сохранить",
      onClick: () => {
        this.focus = {
          caretPosition: null,
          name: null,
        };
        const errors = changeUserDataValidator(this.props.values);

        this.setProps({
          ...this.props,
          errors: { ...errors },
          touched: Object.keys(this.props.values).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {}
          ),
        });

        if (Object.keys(errors).length === 0) {
          console.log(this.props.values);
        }
      },
    });

    return compile(template, {
      emailInput,
      loginInput,
      nameInput,
      surnameInput,
      displayNameInput,
      phoneInput,
      submitButton,
    });
  }
}
