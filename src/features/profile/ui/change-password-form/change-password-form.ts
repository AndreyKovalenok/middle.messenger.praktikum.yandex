import { Block } from "shared/utils";
import { InputField, PrimaryButton } from "shared/ui";

import { template } from "./change-pasword-form.tmpl";
import type { TChangePasswordForm } from "../../types";
import { changePasswordValidator } from "./validator";

type Props = {};

type RenderProps = {
  oldPasswordInput: any;
  newPasswordInput: any;
  repeatNewPasswordInput: any;
  submitButton: any;
};

const initialValues: TChangePasswordForm = {
  newPassword: "",
  oldPassword: "",
  repeatNewPassword: "",
};

export class ChangePasswordForm extends Block<Props, RenderProps> {
  form: TChangePasswordForm;
  errors: Partial<Record<keyof TChangePasswordForm, string>>;
  touched: Partial<Record<keyof TChangePasswordForm, boolean>>;

  constructor(props: Props) {
    super({
      ...props,
      oldPasswordInput: new InputField({
        type: "password",
        value: initialValues.oldPassword,
        placeholder: "Введите старый пароль",
        name: "oldPassword",
        label: "Старый пароль",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            oldPassword: (<HTMLInputElement>evt.target).value,
          };

          this.validateInput("oldPassword", "oldPasswordInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            oldPassword: true,
          };

          this.validateInput("oldPassword", "oldPasswordInput");
        },
      }),
      newPasswordInput: new InputField({
        type: "password",
        value: initialValues.newPassword,
        placeholder: "Введите новый пароль",
        name: "newPassword",
        label: "Новый пароль",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            newPassword: (<HTMLInputElement>evt.target).value,
          };

          this.validateInput("newPassword", "newPasswordInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            newPassword: true,
          };

          this.validateInput("newPassword", "newPasswordInput");
        },
      }),
      repeatNewPasswordInput: new InputField({
        type: "password",
        value: initialValues.repeatNewPassword,
        placeholder: "Повторите новый пароль",
        name: "repeatNewPassword",
        label: "Повторите новый пароль",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            repeatNewPassword: (<HTMLInputElement>evt.target).value,
          };

          this.validateInput("repeatNewPassword", "repeatNewPasswordInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            repeatNewPassword: true,
          };

          this.validateInput("repeatNewPassword", "repeatNewPasswordInput");
        },
      }),
      submitButton: new PrimaryButton({
        children: "Сохранить",
        onClick: () => {
          this.touched = Object.keys(this.form).reduce(
            (acc, cur) => ({
              ...acc,
              [cur]: true,
            }),
            {}
          );

          this.validateInput("oldPassword", "oldPasswordInput");
          this.validateInput("newPassword", "newPasswordInput");
          this.validateInput("repeatNewPassword", "repeatNewPasswordInput");

          if (Object.keys(this.errors).length === 0) {
            console.log(this.form);
          }
        },
      }),
    });

    this.form = initialValues;
    this.errors = {};
    this.touched = {};
  }

  validateInput(name: keyof TChangePasswordForm, input: string) {
    this.errors = changePasswordValidator(this.form);

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
