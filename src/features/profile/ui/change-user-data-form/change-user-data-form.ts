import Handlebars from "handlebars";

import { template } from "./change-user-data-form.tmpl";

import { InputField, PrimaryButton } from "shared/ui";

const emailInput = new InputField({
  type: "email",
  value: "pochta@yandex.ru",
  placeholder: "Введите почту",
  name: "email",
  label: "Почта",
});

const loginInput = new InputField({
  type: "text",
  value: "ivanivanov",
  placeholder: "Введите логин",
  name: "login",
  label: "Логин",
});

const nameInput = new InputField({
  type: "text",
  value: "Иван",
  placeholder: "Введите имя",
  name: "first_name",
  label: "Имя",
});

const surnameInput = new InputField({
  type: "text",
  value: "Иванов",
  placeholder: "Введите фамилию",
  name: "second_name",
  label: "Фамилия",
});

const displayNameInput = new InputField({
  type: "text",
  value: "Иван",
  placeholder: "Введите имя в чате",
  name: "display_name",
  label: "Имя в чате",
});

const phoneInput = new InputField({
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
    emailInput: "",
    loginInput: "",
    nameInput: "",
    surnameInput: "",
    displayNameInput: "",
    phoneInput: "",
    submitButton,
  });
