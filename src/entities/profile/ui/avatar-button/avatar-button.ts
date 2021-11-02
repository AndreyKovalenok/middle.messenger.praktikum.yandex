import { Block } from "shared/utils";

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
    return this.compile(template);
  }
}
