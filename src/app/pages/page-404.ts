import { Page404 } from "pages";
import { renderPage, registerPartials } from "shared/utils";

import "../style/style.scss";

registerPartials();

const page = new Page404({});
const pageContent = page.getContent() as Element;

renderPage("root", pageContent);
