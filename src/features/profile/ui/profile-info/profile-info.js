import Handlebars from "handlebars";

import {  UserDataRow } from 'entities/profile'
import { TextButton } from 'shared/ui'

import { template } from './profile-info.tmpl'

const render = Handlebars.compile(template)

const infoContent = `
  ${UserDataRow({
    label: 'Почта',
    value: 'pochta@yandex.ru',
    withBorder: true
  })}
  ${UserDataRow({
    label: 'Логин',
    value: 'ivanivanov',
    withBorder: true
  })}
  ${UserDataRow({
    label: 'Имя',
    value: 'Иван',
    withBorder: true
  })}
  ${UserDataRow({
    label: 'Фамилия',
    value: 'Иванов',
    withBorder: true
  })}
  ${UserDataRow({
    label: 'Имя в чате',
    value: 'Иван',
    withBorder: true
  })}
  ${UserDataRow({
    label: 'Телефон',
    value: '+7 (909) 967 30 30',
  })}
`

const changeDataButton = TextButton({
  children: 'Изменить данные',
  type: 'button'
})

const changePasswordButton = TextButton({
  children: 'Изменить пароль',
  type: 'button'
})

const logoutButton = TextButton({
  children: 'Выйти',
  type: 'button',
  red: true
})

export const ProfileInfo = (props) => render({
  content: infoContent,
  changeDataButton,
  changePasswordButton,
  logoutButton,
  ...props
})