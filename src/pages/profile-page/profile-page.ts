import { AsideButton, AvatarButton } from "entities/profile";
import {
  ProfileInfo,
  ChangePasswordForm,
  ChangeUserDataForm,
} from "features/profile";
import { authModel } from "features/auth";
import { Block, compile } from "shared/lib";
import { router, state } from "shared/utils";
import { Loader } from "shared/ui";

import { template } from "./profile-page.tmpl";

type TActiveContent = "profile" | "password" | "change-profile";

type Props = {
  activeContent: TActiveContent;
  isLoading: boolean;
  email: string;
  login: string;
  name: string;
  surname: string;
  displayName: string;
  phone: string;
  error?: string;
};

export class ProfilePage extends Block<Props> {
  constructor() {
    super({
      activeContent: "profile",
      isLoading: false,
      email: "",
      login: "",
      name: "",
      surname: "",
      displayName: "",
      phone: "",
    });
  }

  async getUserData() {
    this.setProps({
      ...this.props,
      isLoading: true,
    });

    const data = await authModel.getUser();

    if (!data) {
      this.setProps({
        ...this.props,
        isLoading: false,
      });
      return;
    }

    state.change({
      user: data,
    });

    this.setProps({
      ...this.props,
      isLoading: false,
      displayName: data.display_name,
      email: data.email,
      login: data.login,
      name: data.first_name,
      phone: data.phone,
      surname: data.second_name,
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
      values: {
        display_name: this.props.displayName,
        email: this.props.email,
        first_name: this.props.name,
        login: this.props.login,
        phone: this.props.phone,
        second_name: this.props.surname,
      },
    });
    const changePasswordForm = new ChangePasswordForm({
      onSubmit: () => {
        this.setProps({
          ...this.props,
          activeContent: "profile",
        });
      },
    });
    const profile = new ProfileInfo({
      email: this.props.email,
      login: this.props.login,
      name: this.props.name,
      surname: this.props.surname,
      displayName: this.props.displayName,
      phone: this.props.phone,
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
      ...this.props,
      asideButton,
      avatarButton,
      profile: content[this.props.activeContent],
      loader,
    });
  }
}
