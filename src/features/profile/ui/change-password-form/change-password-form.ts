import { Block, compile } from "shared/lib";
import { InputField, PrimaryButton } from "shared/ui";

import { template } from "./change-pasword-form.tmpl";
import type { TChangePasswordForm } from "../../types";
import { changePasswordValidator } from "./validator";
import { changePassword } from "../../model";

const initialValues: TChangePasswordForm = {
  newPassword: "",
  oldPassword: "",
  repeatNewPassword: "",
};

type Props = {
  values: TChangePasswordForm;
  errors: Partial<Record<keyof TChangePasswordForm, string>>;
  touched: Partial<Record<keyof TChangePasswordForm, boolean>>;
  isLoading: boolean;
  onSubmit: () => void;
};
export class ChangePasswordForm extends Block<Props> {
  focus: {
    name: keyof TChangePasswordForm | null;
    caretPosition: number | null;
  };

  constructor({ onSubmit }: { onSubmit: () => void }) {
    super({
      values: initialValues,
      errors: {},
      touched: {},
      isLoading: false,
      onSubmit,
    });

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
    name: keyof TChangePasswordForm,
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

    const errors = changePasswordValidator(this.props.values);
    this.setProps({
      ...this.props,
      errors: {
        ...errors,
      },
    });
  }

  private focusHandler(name: keyof TChangePasswordForm) {
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
    const oldPasswordInput = new InputField({
      type: "password",
      value: this.props.values.oldPassword,
      errorMessage: this.props.errors.oldPassword,
      touched: this.props.touched.oldPassword,
      placeholder: "Введите старый пароль",
      name: "oldPassword",
      label: "Старый пароль",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler(
          "oldPassword",
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
        this.focusHandler("oldPassword");
      },
    });
    const newPasswordInput = new InputField({
      type: "password",
      value: this.props.values.newPassword,
      errorMessage: this.props.errors.newPassword,
      touched: this.props.touched.newPassword,
      placeholder: "Введите новый пароль",
      name: "newPassword",
      label: "Новый пароль",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler(
          "newPassword",
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
        this.focusHandler("newPassword");
      },
    });
    const repeatNewPasswordInput = new InputField({
      type: "password",
      value: this.props.values.repeatNewPassword,
      errorMessage: this.props.errors.repeatNewPassword,
      touched: this.props.touched.repeatNewPassword,
      placeholder: "Повторите новый пароль",
      name: "repeatNewPassword",
      label: "Повторите новый пароль",
      onChange: (evt) => {
        const target = <HTMLInputElement>evt.target;

        this.inputChangeHandler(
          "repeatNewPassword",
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
        this.focusHandler("repeatNewPassword");
      },
    });
    const submitButton = new PrimaryButton({
      children: "Сохранить",
      isLoading: this.props.isLoading,
      onClick: async () => {
        this.focus = {
          caretPosition: null,
          name: null,
        };
        const errors = changePasswordValidator(this.props.values);

        this.setProps({
          ...this.props,
          errors: { ...errors },
          touched: Object.keys(this.props.values).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {}
          ),
        });

        if (Object.keys(errors).length === 0) {
          this.setProps({
            ...this.props,
            isLoading: true,
          });

          await changePassword({
            newPassword: this.props.values.newPassword,
            oldPassword: this.props.values.oldPassword,
          });

          this.setProps({
            ...this.props,
            isLoading: false,
          });

          this.props.onSubmit();
        }
      },
    });

    return compile(template, {
      oldPasswordInput,
      newPasswordInput,
      repeatNewPasswordInput,
      submitButton,
    });
  }
}
