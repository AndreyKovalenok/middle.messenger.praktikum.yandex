import { AsideButton, AvatarButton } from "entities/profile";
import {
  ProfileInfo,
  ChangePasswordForm,
  ChangeUserDataForm,
  profileModel,
} from "features/profile";
import { authModel } from "features/auth";
import type { TChangeUserDataForm } from "features/profile/types";
import { Block, compile } from "shared/lib";
import { router } from "shared/utils";
import { Loader } from "shared/ui";

import { template } from "./profile-page.tmpl";

const changeDataInitialValues: TChangeUserDataForm = {
  email: "pochta@yandex.ru",
  login: "ivanivanov",
  first_name: "Иван",
  second_name: "Иванов",
  display_name: "Иван",
  phone: "+7 (909) 967 30 30",
};

type TActiveContent = "profile" | "password" | "change-profile";

type Props = {
  activeContent: TActiveContent;
  isLoading: boolean;
};

export class ProfilePage extends Block<Props> {
  constructor() {
    super({
      activeContent: "profile",
      isLoading: false,
    });
  }

  async getUserData() {
    this.setProps({
      ...this.props,
      isLoading: true,
    });

    // TODO: add id
    const data = await profileModel.getUserData("1");

    this.setProps({
      ...this.props,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.getUserData();
  }

  render() {
    const loader = new Loader();

    const asideButton = new AsideButton({
      onClick: () => {
        if (
          this.props.activeContent === "change-profile" ||
          this.props.activeContent === "password"
        ) {
          this.setProps({ ...this.props, activeContent: "profile" });
          return;
        }

        router.go("/chats");
      },
    });

    const avatarButton = new AvatarButton({
      onClick: () => {
        console.log("click");
      },
    });

    const changeUserDataForm = new ChangeUserDataForm({
      values: changeDataInitialValues,
    });
    const changePasswordForm = new ChangePasswordForm();
    const profile = new ProfileInfo({
      email: "pochta@yandex.ru",
      login: "ivanivanov",
      name: "Иван",
      surname: "Иванов",
      displayName: "Bdfy",
      phone: "+7 (909) 967 30 30",
      onChangeData: () =>
        this.setProps({
          ...this.props,
          activeContent: "change-profile",
        }),
      onChangePassword: () =>
        this.setProps({
          ...this.props,
          activeContent: "password",
        }),
      onLogout: () => authModel.logout(),
    });

    const content: Record<TActiveContent, unknown> = {
      "change-profile": changeUserDataForm,
      password: changePasswordForm,
      profile,
    };

    return compile(template, {
      name: "Иван",
      asideButton,
      avatarButton,
      profile: content[this.props.activeContent],
      loader,
    });
  }
}
