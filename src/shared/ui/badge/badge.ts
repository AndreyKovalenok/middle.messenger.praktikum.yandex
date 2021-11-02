import { Block } from "shared/utils";

import { template } from "./badge.tmpl";

type Props = {
  children: string;
};

export class Badge extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template);
  }
}
