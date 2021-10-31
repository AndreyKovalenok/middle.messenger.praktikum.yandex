import { Block } from "shared/utils";
import { ChatItem, TChatItem } from "entities/chat";

import { template } from "./chat-item-button.tmpl";

type Props = {
  isSelected: boolean;
  onClick: () => void;
} & TChatItem;

type RenderProps = { children: any };

export class ChatItemButton extends Block<Omit<Props, "onClick">, RenderProps> {
  constructor({ onClick, ...props }: Props) {
    super({
      ...props,
      children: new ChatItem({
        ...props,
      }),
      events: { click: onClick },
    });
  }

  render() {
    return this.compile(template);
  }
}
