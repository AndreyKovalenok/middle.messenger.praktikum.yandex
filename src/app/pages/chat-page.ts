import { ChatPage } from "pages";
import { renderPage } from "shared/utils";

import { registerPage } from "../register-page";
import "../style/style.scss";

import "../style/style.scss";

registerPage();

const page = new ChatPage({});
const pageContent = page.getContent() as Element;

renderPage("root", pageContent);
