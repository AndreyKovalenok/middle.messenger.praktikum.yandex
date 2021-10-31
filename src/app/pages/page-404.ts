import { Page404 } from "pages";
import { renderPage } from "shared/utils";
import { partials } from "shared/ui";

import "../style/style.scss";

partials.forEach((p) => p());

const page = new Page404({});
const pageContent = page.getContent() as Element;

renderPage("root", pageContent);
