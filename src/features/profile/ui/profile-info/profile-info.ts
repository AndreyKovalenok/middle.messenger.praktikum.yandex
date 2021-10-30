import { UserDataRow } from "entities/profile";
import { TextButton } from "shared/ui";
import { Block } from "shared/utils";

import { template } from "./profile-info.tmpl";

type Props = {};

type RenderProps = {
  emailComponent: any;
  loginComponent: any;
  nameComponent: any;
  surnameComponent: any;
  chatNameComponent: any;
  phoneComponent: any;
  changeDataButton: any;
  changePasswordButton: any;
  logoutButton: any;
};

export class ProfileInfo extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      emailComponent: new UserDataRow({
        label: "Почта",
        value: "pochta@yandex.ru",
        withBorder: true,
      }),
      loginComponent: new UserDataRow({
        label: "Логин",
        value: "ivanivanov",
        withBorder: true,
      }),
      nameComponent: new UserDataRow({
        label: "Имя",
        value: "Иван",
        withBorder: true,
      }),
      surnameComponent: new UserDataRow({
        label: "Фамилия",
        value: "Иванов",
        withBorder: true,
      }),
      chatNameComponent: new UserDataRow({
        label: "Имя в чате",
        value: "Иван",
        withBorder: true,
      }),
      phoneComponent: new UserDataRow({
        label: "Телефон",
        value: "+7 (909) 967 30 30",
      }),
      changeDataButton: new TextButton({
        children: "Изменить данные",
        type: "button",
        onClick: () => {
          console.log("click");
        },
      }),
      changePasswordButton: new TextButton({
        children: "Изменить пароль",
        type: "button",
        onClick: () => {
          console.log("click");
        },
      }),
      logoutButton: new TextButton({
        children: "Выйти",
        type: "button",
        red: true,
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
