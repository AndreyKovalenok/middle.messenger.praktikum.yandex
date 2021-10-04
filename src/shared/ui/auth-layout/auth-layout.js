import Handlebars from "handlebars";

import { template } from './auth-layout.tmpl'

export const AuthLayout = () => Handlebars.registerPartial('auth-layout', template)