import Handlebars from "handlebars";

import { AuthForm } from 'features/auth'

import { template } from './login-page.tmpl'

const render = Handlebars.compile(template)

export const LoginPage = (props) => render({
  authForm: AuthForm(),
  ...props
})