import Handlebars from "handlebars";

import { Input, PrimaryButton, Link } from 'shared/ui'

import { template } from './auth-form.tmpl'

const render = Handlebars.compile(template)

const LoginInput = Input({
  label: "Логин" ,
  type: "text" ,
  value: "ivanivanov",
  placeholder: "Введите логин",
})

const PasswordInput = Input({
  label: "Пароль",
  type: "password",
  value: "qwerty",
  placeholder: "Введите пароль",
})

const SubmitButton = PrimaryButton({
  children: 'Авторизоваться'
})

const RegistrationLink = Link({
  href: '/registration',
  children: 'Нет аккаунта?'
})

export const AuthForm = (props) => render({
  loginInput: LoginInput,
  passwordInput: PasswordInput,
  submitButton: SubmitButton,
  registrationLink: RegistrationLink,
  ...props
})