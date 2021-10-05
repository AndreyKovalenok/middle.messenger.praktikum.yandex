import Handlebars from "handlebars";

import { template } from './text-button.tmpl'

const render = Handlebars.compile(template)

export const TextButton = (props) => render(props)