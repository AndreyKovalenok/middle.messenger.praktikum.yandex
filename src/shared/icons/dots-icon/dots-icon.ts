import Handlebars from "handlebars";

import { template } from "./dots-icon.tmpl";

const render = Handlebars.compile(template);

export const DotsIcon = () => render({});
