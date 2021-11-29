import Handlebars from "handlebars";

import { template } from "./modal-layout.tmpl";

export const ModalLayout = () =>
  Handlebars.registerPartial("modal-layout", template);
