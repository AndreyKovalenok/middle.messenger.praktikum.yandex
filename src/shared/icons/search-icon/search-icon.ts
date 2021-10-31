import Handlebars from "handlebars";

import { template } from "./search-icon.tmpl";

const render = Handlebars.compile(template);

export const SearchIcon = () => render({});
