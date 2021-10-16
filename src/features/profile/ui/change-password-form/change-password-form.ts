import Handlebars from "handlebars";

import { Input, PrimaryButton } from "shared/ui";

import { template } from "./change-pasword-form.tmpl";

const oldPasswordInput = Input({
  type: "password",
  value: "qwerty",
  placeholder: "Введите старый пароль",
  name: "oldPassword",
  label: "Старый пароль",
});

const newPasswordInput = Input({
  type: "password",
  value: "qwerty",
  placeholder: "Введите новый пароль",
  name: "newPassword",
  label: "Новый пароль",
});

const repeatNewPasswordInput = Input({
  type: "password",
  value: "qwerty",
  placeholder: "Повторите новый пароль",
  name: "repeatNewPassword",
  label: "Повторите новый пароль",
});

const submitButton = PrimaryButton({
  children: "Сохранить",
});

type RenderProps = {
  oldPasswordInput: string;
  newPasswordInput: string;
  repeatNewPasswordInput: string;
  submitButton: string;
};

const render = Handlebars.compile<RenderProps>(template);

export const ChangePasswordForm = () =>
  render({
    oldPasswordInput,
    newPasswordInput,
    repeatNewPasswordInput,
    submitButton,
  });
