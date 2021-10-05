import Handlebars from "handlebars";

import { template } from './change-user-data-form.tmpl'

import { Input, PrimaryButton } from 'shared/ui'

const render = Handlebars.compile(template)

const emailInput = Input({
  type: 'email',
  value: 'pochta@yandex.ru',
  placeholder: 'Введите почту',
  name: 'email',
  label: 'Почта'
})

const loginInput = Input({
  type: 'text',
  value: 'ivanivanov',
  placeholder: 'Введите логин',
  name: 'login',
  label: 'Логин'
})

const nameInput = Input({
  type: 'text',
  value: 'Иван',
  placeholder: 'Введите имя',
  name: 'first_name',
  label: 'Имя'
})

const surnameInput = Input({
  type: 'text',
  value: 'Иванов',
  placeholder: 'Введите фамилию',
  name: 'second_name',
  label: 'Фамилия'
})

const displayNameInput = Input({
  type: 'text',
  value: 'Иван',
  placeholder: 'Введите имя в чате',
  name: 'display_name',
  label: 'Имя в чате'
})

const phoneInput = Input({
  type: 'tel',
  value: '+7 (909) 967 30 30',
  placeholder: 'Введите телефон',
  name: 'phone',
  label: 'Телефон'
})

const submitButton = PrimaryButton({
  children: 'Сохранить'
})

export const ChangeUserDataForm = (props) => render({
  emailInput,
  loginInput,
  nameInput,
  surnameInput,
  displayNameInput,
  phoneInput,
  submitButton,
  ...props
})