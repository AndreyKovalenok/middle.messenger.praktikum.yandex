import Handlebars from "handlebars";

import { template } from "./change-user-data-form.tmpl";

import { Input, PrimaryButton } from "shared/ui";

const emailInput = Input({
  type: "email",
  value: "pochta@yandex.ru",
  placeholder: "Введите почту",
  name: "email",
  label: "Почта",
});

const loginInput = Input({
  type: "text",
  value: "ivanivanov",
  placeholder: "Введите логин",
  name: "login",
  label: "Логин",
});

const nameInput = Input({
  type: "text",
  value: "Иван",
  placeholder: "Введите имя",
  name: "first_name",
  label: "Имя",
});

const surnameInput = Input({
  type: "text",
  value: "Иванов",
  placeholder: "Введите фамилию",
  name: "second_name",
  label: "Фамилия",
});

const displayNameInput = Input({
  type: "text",
  value: "Иван",
  placeholder: "Введите имя в чате",
  name: "display_name",
  label: "Имя в чате",
});

const phoneInput = Input({
  type: "tel",
  value: "+7 (909) 967 30 30",
  placeholder: "Введите телефон",
  name: "phone",
  label: "Телефон",
});

const submitButton = PrimaryButton({
  children: "Сохранить",
});

type RenderProps = {
  emailInput: string;
  loginInput: string;
  nameInput: string;
  surnameInput: string;
  displayNameInput: string;
  phoneInput: string;
  submitButton: string;
};

const render = Handlebars.compile<RenderProps>(template);

export const ChangeUserDataForm = () =>
  render({
    emailInput,
    loginInput,
    nameInput,
    surnameInput,
    displayNameInput,
    phoneInput,
    submitButton,
  });
