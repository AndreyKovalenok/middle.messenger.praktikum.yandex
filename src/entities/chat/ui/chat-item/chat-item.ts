import { Badge, Avatar } from "shared/ui";
import { Block, compile } from "shared/lib";

import { template } from "./chat-item.tmpl";

import type { TChatItem } from "../../types";
import styles from "./style.scss";

type Props = TChatItem;

export class ChatItem extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", {
      class: styles.item,
    });
  }

  render() {
    const avatarComponent = new Avatar({
      src: this.props.avatar,
    });
    const badgeComponent = new Badge({
      children: String(this.props.unreadMessages),
    });

    return compile(template, {
      ...this.props,
      avatarComponent,
      badgeComponent,
    });
  }
}
