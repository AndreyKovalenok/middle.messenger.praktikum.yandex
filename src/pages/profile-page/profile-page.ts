import { AsideButton, AvatarButton } from "entities/profile";
import {
  ProfileInfo,
  ChangePasswordForm,
  ChangeUserDataForm,
} from "features/profile";
import { Block } from "shared/utils";

import { template } from "./profile-page.tmpl";

// const changeUserDataForm = new ChangeUserDataForm({});

type Props = {};

type RenderProps = {
  name: string;
  asideButton: any;
  profile: any;
  avatarButton: any;
};

export class ProfilePage extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      asideButton: new AsideButton({
        onClick: () => {
          console.log("click");
        },
      }),
      avatarButton: new AvatarButton({
        onClick: () => {
          console.log("click");
        },
      }),
      profile: new ChangePasswordForm({}),
      // profile: new ProfileInfo({}),
      name: "Иван",
    });
  }

  render() {
    return this.compile(template);
  }
}
