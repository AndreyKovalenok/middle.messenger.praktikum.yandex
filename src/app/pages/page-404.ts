import { Page404 } from "pages";
import { renderPage } from "shared/utils";

import { registerPage } from "../register-page";
import "../style/style.scss";

registerPage();

const page = new Page404();
const pageContent = page.getContent();

renderPage("root", pageContent);
