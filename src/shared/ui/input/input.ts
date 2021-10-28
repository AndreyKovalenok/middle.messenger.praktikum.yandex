import { Block } from "shared/utils";

import { template } from "./input.tmpl";

type Props = {
  type: string;
  value: string;
  placeholder: string;
  name: string;
  error?: boolean;
  onChange: (evt: InputEvent) => void;
};

export class Input extends Block<Omit<Props, "onChange">> {
  constructor({ onChange, ...props }: Props) {
    super({
      ...props,
      events: {
        input: onChange,
      },
    });
  }

  render() {
    return this.compile(template);
  }
}
