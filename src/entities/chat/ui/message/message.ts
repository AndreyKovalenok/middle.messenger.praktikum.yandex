import { Block, compile } from "shared/lib";

import { template } from "./message.tmpl";
import styles from "./style.scss";

const getClass = (isUserMessage: boolean) => {
  if (isUserMessage) {
    return `${styles.wrapper} ${styles.userWrapper}`;
  }

  return styles.wrapper;
};

const getMessageClass = () => {
  return styles.message;
};

type Props = {
  children: string;
  isUserMessage: boolean;
};

export class Message extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", {
      class: getClass(props.isUserMessage),
    });
  }

  render() {
    return compile(template, {
      ...this.props,
      messageClass: getMessageClass(),
    });
  }
}
