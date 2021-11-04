import { Block, compile } from "shared/lib";

import { BlancImage } from "shared/icons";

import { template } from "./avatar-button.tmpl";

type Props = { onClick: () => void };

export class AvatarButton extends Block<Omit<Props, "onClick">> {
  constructor({ onClick, ...props }: Props) {
    super({
      ...props,
      events: {
        click: onClick,
      },
    });
  }

  render() {
    const icon = new BlancImage();

    return compile(template, { icon });
  }
}
