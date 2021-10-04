import Handlebars from "handlebars";

import { template } from './primary-button.tmpl'

const render = Handlebars.compile(template)

export const PrimaryButton = (props) => render(props)