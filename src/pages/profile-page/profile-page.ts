import { AsideButton, AvatarButton } from "entities/profile";
import {
  ProfileInfo,
  ChangePasswordForm,
  ChangeUserDataForm,
} from "features/profile";
import type { TChangeUserDataForm } from "features/profile/types";
import { Block, compile } from "shared/lib";

import { template } from "./profile-page.tmpl";

type Props = {
  name: string;
};

const changeDataInitialValues: TChangeUserDataForm = {
  email: "pochta@yandex.ru",
  login: "ivanivanov",
  first_name: "Иван",
  second_name: "Иванов",
  display_name: "Иван",
  phone: "+7 (909) 967 30 30",
};

export class ProfilePage extends Block<Props> {
  constructor() {
    super({
      name: "Иван",
    });
  }

  render() {
    const asideButton = new AsideButton({
      onClick: () => {
        console.log("click");
      },
    });

    const avatarButton = new AvatarButton({
      onClick: () => {
        console.log("click");
      },
    });

    // const profile = new ChangeUserDataForm({ values: changeDataInitialValues });
    const profile = new ChangePasswordForm();
    // profile: new ProfileInfo({}),

    return compile(template, {
      name: this.props.name,
      asideButton,
      avatarButton,
      profile,
    });
  }
}
