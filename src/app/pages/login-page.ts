import { LoginPage } from "pages";
import { renderPage, registerPartials } from "shared/utils";

import "../style/style.scss";

registerPartials();

const page = new LoginPage();
const pageContent = page.getContent() as Element;

renderPage("root", pageContent);
