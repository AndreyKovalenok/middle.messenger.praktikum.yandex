import Handlebars from "handlebars";

import { template } from "./text-button.tmpl";

type Props = {
  children: string;
  red?: boolean;
};

const render = Handlebars.compile(template);

export const TextButton = (props: Props) => render(props);
