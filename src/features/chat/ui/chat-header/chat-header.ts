import { Block, compile } from "shared/lib";
import { Avatar, IconButton } from "shared/ui";
import { DotsIcon } from "shared/icons";

import { template } from "./chat-header.tmpl";
import * as styles from "./style.scss";

type Props = {
  title: string;
  avatarSrc: string | null;
  isOpen: boolean;
  onAddUserClick: () => void;
  onRemoveUserClick: () => void;
};

export class ChatHeader extends Block<Props> {
  constructor(props: Omit<Props, "isOpen">) {
    super({ ...props, isOpen: false }, "div", {
      class: styles.wrapper,
    });
  }

  render() {
    const actionsButton = new IconButton({
      icon: new DotsIcon(),
      onClick: () => {
        this.setProps({
          ...this.props,
          isOpen: true,
        });
      },
    });
    const avatar = new Avatar({
      src: this.props.avatarSrc,
    });

    const addUserButton = new IconButton({
      text: "Добавить пользователя",
      onClick: () => {
        this.props.onAddUserClick();
        this.setProps({
          ...this.props,
          isOpen: false,
        });
      },
    });
    const removeUserButton = new IconButton({
      text: "Удалить пользователя",
      onClick: () => {
        this.props.onRemoveUserClick();
        this.setProps({
          ...this.props,
          isOpen: false,
        });
      },
    });

    return compile(template, {
      ...this.props,
      actionsButton,
      avatar,
      addUserButton,
      removeUserButton,
    });
  }
}
