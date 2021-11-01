import { Page500 } from "pages";
import { renderPage, registerPartials } from "shared/utils";

import "../style/style.scss";

registerPartials();

const page = new Page500({});
const pageContent = page.getContent() as Element;

renderPage("root", pageContent);
