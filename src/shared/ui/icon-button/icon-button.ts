import { Block } from "shared/utils";

import { template } from "./icon-button.tmpl";

type Props = {
  icon: string;
  onClick: () => void;
};

export class IconButton extends Block<Omit<Props, "onClick">> {
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
