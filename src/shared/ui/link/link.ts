import Handlebars from "handlebars";

import { template } from "./link.tmpl";

type Props = {
  href: string;
  children: string;
  isBlanc?: boolean;
};

const render = Handlebars.compile(template);

export const Link = (props: Props) => render(props);
