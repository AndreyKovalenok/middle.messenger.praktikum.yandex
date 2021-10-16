import Handlebars from "handlebars";

import { template } from "./icon-button.tmpl";

const render = Handlebars.compile(template);

type Props = {
  icon: string;
};

export const IconButton = (props: Props) => render(props);
