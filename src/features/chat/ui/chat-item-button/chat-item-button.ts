import { Block, compile } from "shared/lib";
import { ChatItem, TChatItem } from "entities/chat";

import { template } from "./chat-item-button.tmpl";
import styles from "./style.scss";

const getClass = (isSelected: boolean) => {
  if (isSelected) {
    return `${styles.button} ${styles.selected}`;
  }

  return styles.button;
};

type Props = {
  isSelected: boolean;
  onClick: () => void;
} & TChatItem;

export class ChatItemButton extends Block<Omit<Props, "onClick">> {
  constructor({ onClick, ...props }: Props) {
    super(
      {
        ...props,
        events: { click: onClick },
      },
      "button",
      {
        type: "button",
        class: getClass(props.isSelected),
      }
    );
  }

  render() {
    const children = new ChatItem(this.props);

    return compile(template, { children });
  }
}
