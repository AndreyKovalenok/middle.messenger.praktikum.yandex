import { Block } from "shared/utils";
import { InputField, PrimaryButton } from "shared/ui";

import { template } from "./change-pasword-form.tmpl";

type Props = {};

type RenderProps = {
  oldPasswordInput: any;
  newPasswordInput: any;
  repeatNewPasswordInput: any;
  submitButton: any;
};

export class ChangePasswordForm extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      oldPasswordInput: new InputField({
        type: "password",
        value: "qwerty",
        placeholder: "Введите старый пароль",
        name: "oldPassword",
        label: "Старый пароль",
        onChange: () => {
          console.log("change");
        },
      }),
      newPasswordInput: new InputField({
        type: "password",
        value: "qwerty",
        placeholder: "Введите новый пароль",
        name: "newPassword",
        label: "Новый пароль",
        onChange: () => {
          console.log("change");
        },
      }),
      repeatNewPasswordInput: new InputField({
        type: "password",
        value: "qwerty",
        placeholder: "Повторите новый пароль",
        name: "repeatNewPassword",
        label: "Повторите новый пароль",
        onChange: () => {
          console.log("change");
        },
      }),
      submitButton: new PrimaryButton({
        children: "Сохранить",
        onClick: () => {
          console.log("click");
        },
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
