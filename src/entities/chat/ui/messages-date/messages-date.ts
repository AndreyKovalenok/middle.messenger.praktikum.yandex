import { Block, compile } from "shared/lib";

import { template } from "./messages-date.tmpl";
import * as styles from "./style.scss";

type Props = {
  text: string;
};

export class MessagesDate extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", {
      class: styles.date,
    });
  }

  render() {
    return compile(template, this.props);
  }
}
