import Handlebars from "handlebars";

import { template } from "./clip-icon.tmpl";

const render = Handlebars.compile(template);

export const ClipIcon = () => render({});
