import Handlebars from "handlebars";

import { template } from "./primary-button.tmpl";

type Props = {
  children: string;
};

const render = Handlebars.compile(template);

export const PrimaryButton = (props: Props) => render(props);
