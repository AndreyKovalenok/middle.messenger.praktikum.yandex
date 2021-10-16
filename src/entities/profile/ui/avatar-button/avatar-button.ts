import Handlebars from "handlebars";

import { template } from "./avatar-button.tmpl";

const render = Handlebars.compile(template);

export const AvatarButton = () => render({});
