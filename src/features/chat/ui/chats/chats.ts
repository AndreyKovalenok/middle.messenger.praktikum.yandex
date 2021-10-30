import { TChatItem } from "entities/chat";
import { Block } from "shared/utils";

import { template } from "./chats.tmpl";
import { ChatItemButton } from "../chat-item-button";

type Props = {
  selectedId: string | null;
  chats: TChatItem[];
};

type RenderProps = { content: any };

export class Chats extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      content: new ChatItemButton({
        ...props.chats[0],
        isSelected: false,
        onClick: () => {
          console.log("click");
        },
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
