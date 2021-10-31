import { Block } from "shared/utils";

import { template } from "./input.tmpl";

type Props = {
  type: string;
  value: string;
  placeholder: string;
  name: string;
  error?: boolean;
  onChange: (evt: InputEvent) => void;
  onBlur: (evt: InputEvent) => void;
};

export class Input extends Block<Omit<Props, "onChange" | "onBlur">> {
  constructor({ onChange, onBlur, ...props }: Props) {
    super({
      ...props,
      events: {
        input: onChange,
        blur: onBlur,
      },
    });
  }

  render() {
    return this.compile(template);
  }
}
