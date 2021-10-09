import Handlebars from "handlebars";

import { AsideButton, AvatarButton } from 'entities/profile'
import { 
  ProfileInfo, 
  ChangePasswordForm, 
  ChangeUserDataForm 
} from 'features/profile'

import { template } from './profile-page.tmpl'

const render = Handlebars.compile(template)

const asideButton = AsideButton()
const avatarButton = AvatarButton()

const changeUserDataForm = ChangeUserDataForm()
const changePasswordForm = ChangePasswordForm()
const profileInfo = ProfileInfo()

export const ProfilePage = (props) => render({
  name: 'Иван',
  asideButton,
  profile: profileInfo,
  avatar: avatarButton,
  ...props
})  