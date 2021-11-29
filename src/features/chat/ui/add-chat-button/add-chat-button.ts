import { Block, compile } from "shared/lib";

import * as styles from "./style.scss";

type Props = {
  onClick: () => void;
};

export class AddChatButton extends Block {
  constructor({ onClick }: Props) {
    super({ events: { click: onClick } }, "button", {
      class: styles.button,
    });
  }

  render() {
    return compile("{{text}}", {
      text: "Добавить чат",
    });
  }
}
