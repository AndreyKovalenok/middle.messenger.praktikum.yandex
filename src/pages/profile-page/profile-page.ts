import { AsideButton, AvatarButton } from "entities/profile";
import {
  ProfileInfo,
  ChangePasswordForm,
  ChangeUserDataForm,
  ChangeAvatarModal,
  profileModel,
} from "features/profile";
import { authModel } from "features/auth";
import { Block, compile } from "shared/lib";
import { state } from "shared/utils";
import { ROUTES } from "shared/config";
import Router from "shared/lib/router";
import { Loader } from "shared/ui";

import { template } from "./profile-page.tmpl";
import styles from "./style.scss";

type TActiveContent = "profile" | "password" | "change-profile";

type Props = {
  activeContent: TActiveContent;
  isLoading: boolean;
  isAvatarModalActive: boolean;
  email: string;
  login: string;
  name: string;
  surname: string;
  displayName: string;
  phone: string;
  avatar?: string;
  error?: string;
};

export class ProfilePage extends Block<Props> {
  constructor() {
    super(
      {
        activeContent: "profile",
        isLoading: false,
        isAvatarModalActive: false,
        email: "",
        login: "",
        name: "",
        surname: "",
        displayName: "",
        phone: "",
        avatar: "",
      },
      "div",
      { class: styles.page }
    );
  }

  async getUserData() {
    this.setProps({
      ...this.props,
      isLoading: true,
    });

    try {
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
        avatar: data.avatar,
      });
    } catch (error) {
      this.setProps({
        ...this.props,
        isLoading: false,
      });
    }
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

        Router.go(ROUTES.messenger);
      },
    });

    const avatarButton = new AvatarButton({
      src: this.props.avatar,
      onClick: () => {
        this.setProps({
          ...this.props,
          isAvatarModalActive: true,
        });
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
      onSubmit: ({
        display_name,
        email,
        first_name,
        login,
        phone,
        second_name,
      }) => {
        this.setProps({
          ...this.props,
          activeContent: "profile",
          displayName: display_name,
          email,
          login,
          name: first_name,
          phone,
          surname: second_name,
        });
      },
    });
    const changePasswordForm = new ChangePasswordForm({
      onSubmit: this.getUserData,
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

    const changeAvatarModal = new ChangeAvatarModal({
      isActive: this.props.isAvatarModalActive,
      onClose: () =>
        this.setProps({ ...this.props, isAvatarModalActive: false }),
      onSubmit: async (file: File) => {
        const formData = new FormData();
        formData.set("avatar", file);

        const userData = await profileModel.changeAvatar(formData);

        this.setProps({
          ...this.props,
          isAvatarModalActive: false,
          avatar: userData.avatar,
        });
      },
    });

    return compile(template, {
      ...this.props,
      asideButton,
      avatarButton,
      profile: content[this.props.activeContent],
      loader,
      changeAvatarModal,
    });
  }
}
