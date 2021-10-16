import Handlebars from "handlebars";

import { template } from "./messages.tmpl";

const render = Handlebars.compile(template);

export const Messages = () => render({});
