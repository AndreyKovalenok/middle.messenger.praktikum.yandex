import { Badge, Avatar } from "shared/ui";
import { Block } from "shared/utils";

import { template } from "./chat-item.tmpl";

import type { TChatItem } from "../../types";

type Props = TChatItem;

type RenderProps = {
  badgeComponent: any;
  avatarComponent: any;
};

export class ChatItem extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      avatarComponent: new Avatar({
        src: props.avatar,
      }),
      badgeComponent: new Badge({
        children: String(props.unreadMessages),
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
