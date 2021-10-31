import { Block } from "shared/utils";

import { template } from "./messages.tmpl";

type Props = {};

export class Messages extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template);
  }
}
