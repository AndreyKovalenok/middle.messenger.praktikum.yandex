import { Block } from "shared/utils";

import { template } from "./text-button.tmpl";

type Props = {
  children: string;
  type?: string;
  red?: boolean;
  onClick: () => void;
};

export class TextButton extends Block<Omit<Props, "onClick">> {
  constructor({ onClick, ...props }: Props) {
    super({ ...props, events: { click: onClick } });
  }

  render() {
    return this.compile(template);
  }
}
