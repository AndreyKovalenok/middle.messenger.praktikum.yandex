import Handlebars from "handlebars";

import { RegisterForm } from 'features/auth'

import { template } from './register-page.tmpl'

const render = Handlebars.compile(template)

export const RegisterPage = (props) => render({
  registerForm: RegisterForm(),
  ...props
})