import { Block, compile } from "shared/lib";

import { template } from "./avatar.tmpl";
import styles from "./style.scss";

type Props = {
  src: string | null;
};

export class Avatar extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", {
      class: styles.avatar,
    });
  }

  render() {
    return compile(template, this.props);
  }
}
