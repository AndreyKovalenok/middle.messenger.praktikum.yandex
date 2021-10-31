import { Block } from "shared/utils";
import { InputField, PrimaryButton } from "shared/ui";

import { template } from "./change-pasword-form.tmpl";
import type { TChangePasswordForm } from "../../types";

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
        },
      }),
      submitButton: new PrimaryButton({
        children: "Сохранить",
        onClick: () => {
          console.log(this.form);
        },
      }),
    });

    this.form = initialValues;
  }

  render() {
    return this.compile(template);
  }
}
