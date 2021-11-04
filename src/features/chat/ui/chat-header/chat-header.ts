import { Block, compile } from "shared/lib";
import { Avatar, IconButton } from "shared/ui";
import { DotsIcon } from "shared/icons";

import { template } from "./chat-header.tmpl";
import * as styles from "./style.scss";

type Props = {
  title: string;
  avatarSrc: string | null;
  onActionsClick: () => void;
};

export class ChatHeader extends Block<Props> {
  constructor(props: Props) {
    super(props, "div", {
      class: styles.wrapper,
    });
  }

  render() {
    const actionsButton = new IconButton({
      icon: new DotsIcon(),
      onClick: this.props.onActionsClick,
    });
    const avatar = new Avatar({
      src: this.props.avatarSrc,
    });

    return compile(template, {
      actionsButton,
      avatar,
    });
  }
}
