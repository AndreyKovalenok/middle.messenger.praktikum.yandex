import Handlebars from "handlebars";

import { template } from "./blanc-layout.tmpl";

export const BlancLayout = () =>
  Handlebars.registerPartial("blanc-layout", template);
