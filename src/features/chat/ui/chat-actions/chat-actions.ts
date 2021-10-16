import Handlebars from "handlebars";

import { template } from "./chat-actions.tmpl";

const render = Handlebars.compile(template);

export const ChatActions = () => render({});
