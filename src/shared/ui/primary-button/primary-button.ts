import { Block, compile } from "shared/lib";

import { template } from "./primary-button.tmpl";
import * as styles from "./style.scss";

type Props = {
  children: string;
  type?: string;
  onClick: () => void;
};

export class PrimaryButton extends Block<Omit<Props, "onClick">> {
  constructor({ onClick, type = "button", ...props }: Props) {
    super(
      {
        ...props,
        type,
        events: {
          click: onClick,
        },
      },
      "button",
      {
        type,
        class: styles.button,
      }
    );
  }

  render() {
    return compile(template, this.props);
  }
}
