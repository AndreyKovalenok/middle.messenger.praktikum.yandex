import Handlebars from "handlebars";

import { template } from "./user-data-row.tmpl";

type Props = {
  label: string;
  value: string;
  withBorder?: boolean;
};

const render = Handlebars.compile(template);

export const UserDataRow = (props: Props) => render(props);
