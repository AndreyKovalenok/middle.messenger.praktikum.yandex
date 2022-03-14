import { TChatItem } from "entities/chat";
import { Block, compile } from "shared/lib";

import { ChatItemButton } from "../chat-item-button";
import styles from "./style.scss";
import { template } from "./chats.tmpl";

type Props = {
  selectedId: string | null;
  chats: TChatItem[];
  setSelectedElement: (chat: TChatItem) => void;
};

export class Chats extends Block<Props> {
  constructor(props: Props) {
    super(
      {
        ...props,
      },
      "div",
      {
        class: styles.chats,
      }
    );
  }

  render() {
    return this.props.chats.map((chat) => {
      const chatItem = new ChatItemButton({
        ...chat,
        onClick: () => {
          this.props.setSelectedElement(chat);
        },
        isSelected: this.props.selectedId === chat.id,
      });

      return compile(template, { content: chatItem });
    });
  }
}
