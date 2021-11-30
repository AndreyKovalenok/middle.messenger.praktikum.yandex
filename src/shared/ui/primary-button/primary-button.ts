import { Block, compile } from "shared/lib";

import { Loader } from "../loader";
import { template } from "./primary-button.tmpl";
import styles from "./style.scss";

type Props = {
  children: string;
  type?: string;
  isLoading?: boolean;
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
    const loader = new Loader();

    return compile(template, { ...this.props, loader });
  }
}
