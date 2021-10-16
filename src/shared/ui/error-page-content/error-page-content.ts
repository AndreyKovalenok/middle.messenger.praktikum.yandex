import Handlebars from "handlebars";

import { template } from "./error-page-content.tmpl";

type Props = {
  link: string;
  title: string;
  description: string;
};

const render = Handlebars.compile(template);

export const ErrorPageContent = (props: Props) => render(props);
