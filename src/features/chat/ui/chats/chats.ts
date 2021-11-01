import { TChatItem } from "entities/chat";
import { Block } from "shared/utils";

import { ChatItemButton } from "../chat-item-button";

type Props = {
  selectedId: string | null;
  chats: TChatItem[];
};

export class Chats extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
    });
  }

  render() {
    const container = document.createElement("div");

    this.props.chats.forEach((item) => {
      const chatItem = new ChatItemButton({
        ...item,
        onClick: () => {
          console.log("click");
        },
        isSelected: false,
      });

      container.append(chatItem.getContent() as Element);
    });

    return container;
  }
}
