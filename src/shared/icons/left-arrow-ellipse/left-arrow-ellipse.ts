import Handlebars from "handlebars";

import { template } from "./left-arrow-ellipse.tmpl";

const render = Handlebars.compile(template);

export const LeftArrowEllipse = () => render({});
