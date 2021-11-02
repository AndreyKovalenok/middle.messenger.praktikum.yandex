import { Page500 } from "pages";
import { renderPage } from "shared/utils";

import { registerPage } from "../register-page";
import "../style/style.scss";

registerPage();

const page = new Page500({});
const pageContent = page.getContent() as Element;

renderPage("root", pageContent);
