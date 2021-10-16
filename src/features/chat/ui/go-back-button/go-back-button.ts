import Handlebars from "handlebars";

import { template } from "./go-back-button.tmpl";

const render = Handlebars.compile(template);

export const GoBackButton = () => render({});
