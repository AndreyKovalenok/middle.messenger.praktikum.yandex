import Handlebars from "handlebars";

import { template } from "./blanc-image.tmpl";

const render = Handlebars.compile(template);

export const BlancImage = () => render({});
