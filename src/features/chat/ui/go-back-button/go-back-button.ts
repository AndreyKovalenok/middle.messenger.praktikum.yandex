import { Block } from "shared/utils";

import { template } from "./go-back-button.tmpl";

type Props = {
  onClick: () => void;
};

export class GoBackButton extends Block<Omit<Props, "onClick">> {
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
