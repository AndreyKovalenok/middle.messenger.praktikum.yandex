import { Block } from "shared/utils";
import { InputField, PrimaryButton } from "shared/ui";

import { template } from "./change-user-data-form.tmpl";
import type { TChangeUserDataForm } from "../../types";

type Props = {};

type RenderProps = {
  emailInput: any;
  loginInput: any;
  nameInput: any;
  surnameInput: any;
  displayNameInput: any;
  phoneInput: any;
  submitButton: any;
};

const initialValues: TChangeUserDataForm = {
  email: "pochta@yandex.ru",
  login: "ivanivanov",
  first_name: "Иван",
  second_name: "Иванов",
  display_name: "Иван",
  phone: "+7 (909) 967 30 30",
};

export class ChangeUserDataForm extends Block<Props, RenderProps> {
  form: TChangeUserDataForm;

  constructor(props: Props) {
    super({
      ...props,
      emailInput: new InputField({
        type: "email",
        value: initialValues.email,
        placeholder: "Введите почту",
        name: "email",
        label: "Почта",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            email: (<HTMLInputElement>evt.target).value,
          };
        },
        onBlur: () => {},
      }),
      loginInput: new InputField({
        type: "text",
        value: initialValues.login,
        placeholder: "Введите логин",
        name: "login",
        label: "Логин",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            login: (<HTMLInputElement>evt.target).value,
          };
        },
        onBlur: () => {},
      }),
      nameInput: new InputField({
        type: "text",
        value: initialValues.first_name,
        placeholder: "Введите имя",
        name: "first_name",
        label: "Имя",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            first_name: (<HTMLInputElement>evt.target).value,
          };
        },
        onBlur: () => {},
      }),
      surnameInput: new InputField({
        type: "text",
        value: initialValues.second_name,
        placeholder: "Введите фамилию",
        name: "second_name",
        label: "Фамилия",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            second_name: (<HTMLInputElement>evt.target).value,
          };
        },
        onBlur: () => {},
      }),
      displayNameInput: new InputField({
        type: "text",
        value: initialValues.display_name,
        placeholder: "Введите имя в чате",
        name: "display_name",
        label: "Имя в чате",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            display_name: (<HTMLInputElement>evt.target).value,
          };
        },
        onBlur: () => {},
      }),
      phoneInput: new InputField({
        type: "tel",
        value: initialValues.phone,
        placeholder: "Введите телефон",
        name: "phone",
        label: "Телефон",
        onChange: (evt) => {
          this.form = {
            ...this.form,
            phone: (<HTMLInputElement>evt.target).value,
          };
        },
        onBlur: () => {},
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
