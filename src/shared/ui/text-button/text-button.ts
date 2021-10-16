import Handlebars from "handlebars";

import { template } from "./text-button.tmpl";

type Props = {
  children: string;
  type?: string;
  red?: boolean;
};

const render = Handlebars.compile<Props>(template);

export const TextButton = ({ type = "button", ...props }: Props) =>
  render({ type, ...props });
