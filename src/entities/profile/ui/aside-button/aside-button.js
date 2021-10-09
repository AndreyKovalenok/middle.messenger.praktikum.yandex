import Handlebars from "handlebars";

import { template } from './aside-button.tmpl'

const render = Handlebars.compile(template)

export const AsideButton = (props) => render(props)