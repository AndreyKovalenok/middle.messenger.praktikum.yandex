import { Block } from "shared/utils";
import { InputField, PrimaryButton } from "shared/ui";

import { template } from "./change-user-data-form.tmpl";
import type { TChangeUserDataForm } from "../../types";
import { changeUserDataValidator } from "./validator";

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
  errors: Partial<TChangeUserDataForm>;
  touched: Partial<Record<keyof TChangeUserDataForm, boolean>>;

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

          this.validateInput("email", "emailInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            email: true,
          };

          this.validateInput("email", "emailInput");
        },
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

          this.validateInput("login", "loginInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            login: true,
          };

          this.validateInput("login", "loginInput");
        },
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

          this.validateInput("first_name", "nameInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            first_name: true,
          };

          this.validateInput("first_name", "nameInput");
        },
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

          this.validateInput("second_name", "surnameInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            second_name: true,
          };

          this.validateInput("second_name", "surnameInput");
        },
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

          this.validateInput("display_name", "displayNameInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            display_name: true,
          };

          this.validateInput("display_name", "displayNameInput");
        },
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

          this.validateInput("phone", "phoneInput");
        },
        onBlur: () => {
          this.touched = {
            ...this.touched,
            phone: true,
          };

          this.validateInput("phone", "phoneInput");
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

          this.validateInput("email", "emailInput");
          this.validateInput("login", "loginInput");
          this.validateInput("first_name", "nameInput");
          this.validateInput("second_name", "surnameInput");
          this.validateInput("display_name", "displayNameInput");
          this.validateInput("phone", "phoneInput");

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

  validateInput(name: keyof TChangeUserDataForm, input: string) {
    this.errors = changeUserDataValidator(this.form);

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
