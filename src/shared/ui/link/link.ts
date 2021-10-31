import { Block } from "shared/utils";

import { template } from "./link.tmpl";

type Props = {
  href: string;
  children: string;
  isBlanc?: boolean;
};

export class Link extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template);
  }
}
