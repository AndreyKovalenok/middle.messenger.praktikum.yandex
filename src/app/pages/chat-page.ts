import { ChatPage } from "pages";
import { renderPage } from "shared/utils";
import { partials } from "shared/ui";

import "../style/style.scss";

partials.forEach((p) => p());

const page = new ChatPage({});
const pageContent = page.getContent() as Element;

renderPage("root", pageContent);
