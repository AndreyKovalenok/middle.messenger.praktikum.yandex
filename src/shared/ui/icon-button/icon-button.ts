import { Block, compile } from "shared/lib";

import { template } from "./icon-button.tmpl";
import styles from "./style.scss";

type Props = {
  icon?: Block;
  text?: string;
  onClick: () => void;
};

export class IconButton extends Block<Omit<Props, "onClick">> {
  constructor({ onClick, ...props }: Props) {
    super(
      {
        ...props,
        events: {
          click: onClick,
        },
      },
      "button",
      {
        type: "button",
        class: styles.button,
      }
    );
  }

  render() {
    return compile(template, this.props);
  }
}
