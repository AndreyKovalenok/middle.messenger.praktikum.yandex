import Handlebars from "handlebars";

import { template } from "./chat-page.tmpl";

const render = Handlebars.compile(template);

export const ChatPage = () => render({});
