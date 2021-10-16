import Handlebars from "handlebars";

import { template } from "./avatar.tmpl";

const render = Handlebars.compile<Props>(template);

type Props = {
  src: string | null;
};

export const Avatar = (props: Props) => render(props);
