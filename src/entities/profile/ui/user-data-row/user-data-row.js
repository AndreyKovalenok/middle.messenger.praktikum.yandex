import Handlebars from "handlebars";

import { template } from './user-data-row.tmpl'

const render = Handlebars.compile(template)

export const UserDataRow = (props) => render(props)