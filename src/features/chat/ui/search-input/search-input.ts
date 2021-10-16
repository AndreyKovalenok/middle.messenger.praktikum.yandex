import Handlebars from "handlebars";

import { template } from "./search-input.tmpl";

const render = Handlebars.compile(template);

export const SearchInput = () => render({});
