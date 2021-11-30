import { UserDataRow } from "entities/profile";
import { TextButton } from "shared/ui";
import { Block, compile } from "shared/lib";

import { template } from "./profile-info.tmpl";
import styles from "./style.scss";

type Props = {
  email: string;
  login: string;
  name: string;
  surname: string;
  displayName: string;
  phone: string;
  onChangeData: () => void;
  onChangePassword: () => void;
  onLogout: () => void;
};

export class ProfileInfo extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", {
      class: styles.profileInfo,
    });
  }

  render() {
    const emailComponent = new UserDataRow({
      label: "Почта",
      value: this.props.email,
      withBorder: true,
    });
    const loginComponent = new UserDataRow({
      label: "Логин",
      value: this.props.login,
      withBorder: true,
    });
    const nameComponent = new UserDataRow({
      label: "Имя",
      value: this.props.name,
      withBorder: true,
    });
    const surnameComponent = new UserDataRow({
      label: "Фамилия",
      value: this.props.surname,
      withBorder: true,
    });
    const chatNameComponent = new UserDataRow({
      label: "Имя в чате",
      value: this.props.displayName,
      withBorder: true,
    });
    const phoneComponent = new UserDataRow({
      label: "Телефон",
      value: this.props.phone,
    });
    const changeDataButton = new TextButton({
      children: "Изменить данные",
      type: "button",
      onClick: this.props.onChangeData,
    });
    const changePasswordButton = new TextButton({
      children: "Изменить пароль",
      type: "button",
      onClick: this.props.onChangePassword,
    });
    const logoutButton = new TextButton({
      children: "Выйти",
      type: "button",
      red: true,
      onClick: this.props.onLogout,
    });

    return compile(template, {
      emailComponent,
      loginComponent,
      nameComponent,
      surnameComponent,
      chatNameComponent,
      phoneComponent,
      changeDataButton,
      changePasswordButton,
      logoutButton,
    });
  }
}
