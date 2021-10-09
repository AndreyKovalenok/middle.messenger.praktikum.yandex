import Handlebars from "handlebars";

import { template } from './error-page-content.tmpl'

const render = Handlebars.compile(template)

export const ErrorPageContent = (props) => render(props)