import { Block, compile } from "shared/lib";

import { template } from "./link.tmpl";
import * as styles from "./style.scss";

type Props = {
  href: string;
  children: string;
  isBlanc?: boolean;
};

export class Link extends Block<Props> {
  constructor(props: Props) {
    super(props, "a", {
      href: props.href,
      class: styles.link,
    });
  }

  render() {
    return compile(template, this.props);
  }
}
