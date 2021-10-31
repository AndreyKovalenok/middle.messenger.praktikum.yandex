import { Block } from "shared/utils";
import { Avatar, IconButton } from "shared/ui";
import { DotsIcon } from "shared/icons";

import { template } from "./chat-header.tmpl";

type Props = {
  title: string;
  avatarSrc: string | null;
};

type RenderProps = {
  avatar: any;
  actionsButton: any;
};

export class ChatHeader extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      actionsButton: new IconButton({
        icon: DotsIcon(),
        onClick: () => {
          console.log("click");
        },
      }),
      avatar: new Avatar({
        src: props.avatarSrc,
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
