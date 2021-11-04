import { RegisterPage } from "pages";
import { renderPage } from "shared/utils";

import "../style/style.scss";
import { registerPage } from "../register-page";

registerPage();

const page = new RegisterPage();
const pageContent = page.getContent();

renderPage("root", pageContent);
