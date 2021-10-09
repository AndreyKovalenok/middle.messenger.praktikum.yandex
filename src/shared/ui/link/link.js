import Handlebars from "handlebars";

import { template } from './link.tmpl'

const render = Handlebars.compile(template)

export const Link = (props) => render(props)