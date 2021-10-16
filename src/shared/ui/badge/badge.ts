import Handlebars from "handlebars";

import { template } from "./badge.tmpl";

const render = Handlebars.compile<Props>(template);

type Props = {
  children: string;
};

export const Badge = (props: Props) => render(props);
