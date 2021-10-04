import Handlebars from 'handlebars'

import { template } from './input.tmpl'

const render = Handlebars.compile(template)

export const Input = (props) => render(props)