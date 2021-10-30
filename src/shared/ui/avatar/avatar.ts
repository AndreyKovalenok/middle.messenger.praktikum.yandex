import { Block } from "shared/utils";

import { template } from "./avatar.tmpl";

type Props = {
  src: string | null;
};

export class Avatar extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template);
  }
}
