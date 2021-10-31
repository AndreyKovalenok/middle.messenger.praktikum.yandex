import { Block } from "shared/utils";

import { template } from "./aside-button.tmpl";

type Props = {
  onClick: () => void;
};

export class AsideButton extends Block<Omit<Props, "onClick">> {
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
