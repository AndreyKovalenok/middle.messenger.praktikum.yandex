import Handlebars from "handlebars";

import { template } from "./input.tmpl";

type Props = {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  name: string;
  errorMessage?: string;
  error?: boolean;
};

const render = Handlebars.compile(template);

export const Input = (props: Props) => render(props);
