import { Block } from "shared/utils";

import { template } from "./user-data-row.tmpl";

type Props = {
  label: string;
  value: string;
  withBorder?: boolean;
};

export class UserDataRow extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template);
  }
}
