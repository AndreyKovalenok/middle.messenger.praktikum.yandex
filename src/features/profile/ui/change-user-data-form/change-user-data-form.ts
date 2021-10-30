import { Block } from "shared/utils";
import { InputField, PrimaryButton } from "shared/ui";

import { template } from "./change-user-data-form.tmpl";

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

export class ChangeUserDataForm extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      emailInput: new InputField({
        type: "email",
        value: "pochta@yandex.ru",
        placeholder: "Введите почту",
        name: "email",
        label: "Почта",
        onChange: () => {
          console.log("change");
        },
      }),
      loginInput: new InputField({
        type: "text",
        value: "ivanivanov",
        placeholder: "Введите логин",
        name: "login",
        label: "Логин",
        onChange: () => {
          console.log("change");
        },
      }),
      nameInput: new InputField({
        type: "text",
        value: "Иван",
        placeholder: "Введите имя",
        name: "first_name",
        label: "Имя",
        onChange: () => {
          console.log("change");
        },
      }),
      surnameInput: new InputField({
        type: "text",
        value: "Иванов",
        placeholder: "Введите фамилию",
        name: "second_name",
        label: "Фамилия",
        onChange: () => {
          console.log("change");
        },
      }),
      displayNameInput: new InputField({
        type: "text",
        value: "Иван",
        placeholder: "Введите имя в чате",
        name: "display_name",
        label: "Имя в чате",
        onChange: () => {
          console.log("change");
        },
      }),
      phoneInput: new InputField({
        type: "tel",
        value: "+7 (909) 967 30 30",
        placeholder: "Введите телефон",
        name: "phone",
        label: "Телефон",
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
