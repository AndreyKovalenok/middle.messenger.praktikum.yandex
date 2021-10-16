import Handlebars from "handlebars";

import { AsideButton, AvatarButton } from "entities/profile";
import {
  ProfileInfo,
  ChangePasswordForm,
  ChangeUserDataForm,
} from "features/profile";

import { template } from "./profile-page.tmpl";

const asideButton = AsideButton();
const avatarButton = AvatarButton();

const changeUserDataForm = ChangeUserDataForm();
const changePasswordForm = ChangePasswordForm();
const profileInfo = ProfileInfo();

type RenderProps = {
  name: string;
  asideButton: string;
  profile: string;
  avatar: string;
};

const render = Handlebars.compile<RenderProps>(template);

export const ProfilePage = () =>
  render({
    name: "Иван",
    asideButton,
    profile: profileInfo,
    avatar: avatarButton,
  });
