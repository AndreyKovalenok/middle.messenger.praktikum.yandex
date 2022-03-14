import { Block, compile } from "shared/lib";

import { LeftArrowEllipse } from "shared/icons";

import { template } from "./aside-button.tmpl";
import styles from "./style.scss";

type Props = {
  onClick: () => void;
};

export class AsideButton extends Block<Omit<Props, "onClick">> {
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
    const icon = new LeftArrowEllipse();

    return compile(template, { icon });
  }
}
