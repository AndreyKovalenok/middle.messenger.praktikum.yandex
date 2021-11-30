import { Block, compile } from "shared/lib";

import { template } from "./text-button.tmpl";
import styles from "./style.scss";

const getClass = (isRed: boolean) => {
  if (isRed) {
    return `${styles.button} ${styles.red}`;
  }

  return styles.button;
};

type Props = {
  children: string;
  type?: string;
  red?: boolean;
  onClick: () => void;
};

export class TextButton extends Block<Omit<Props, "onClick">> {
  constructor({ onClick, type = "button", ...props }: Props) {
    super({ ...props, events: { click: onClick } }, "button", {
      type,
      class: getClass(Boolean(props.red)),
    });
  }

  render() {
    return compile(template, this.props);
  }
}
