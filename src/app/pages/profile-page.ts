import { ProfilePage } from "pages";
import { renderPage } from "shared/utils";

import { registerPage } from "../register-page";
import "../style/style.scss";

registerPage();

const page = new ProfilePage();
const pageContent = page.getContent();

renderPage("root", pageContent);
