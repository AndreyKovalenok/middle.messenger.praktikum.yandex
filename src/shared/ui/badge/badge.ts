import { Block, compile } from "shared/lib";

import { template } from "./badge.tmpl";

type Props = {
  children: string;
};

export class Badge extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return compile(template, this.props);
  }
}
