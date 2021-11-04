import { Block, compile } from "shared/lib";

import { ArrowRight } from "shared/icons";

import { template } from "./go-back-button.tmpl";
import * as styles from "./style.scss";

type Props = {
  onClick: () => void;
};

export class GoBackButton extends Block<Omit<Props, "onClick">> {
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
        class: styles.button,
      }
    );
  }

  render() {
    const icon = new ArrowRight();

    return compile(template, { ...this.props, icon });
  }
}
