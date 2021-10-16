import Handlebars from "handlebars";

import { template } from "./arrow-right.tmpl";

const render = Handlebars.compile(template);

export const ArrowRight = () => render({});
