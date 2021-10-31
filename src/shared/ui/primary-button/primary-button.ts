import { Block } from "shared/utils";

import { template } from "./primary-button.tmpl";

type Props = {
  children: string;
  type?: string;
  onClick: () => void;
};

export class PrimaryButton extends Block<Omit<Props, "onClick">> {
  constructor({ onClick, type = "button", ...props }: Props) {
    super({
      ...props,
      type,
      events: {
        click: onClick,
      },
    });
  }

  render() {
    return this.compile(template);
  }
}
