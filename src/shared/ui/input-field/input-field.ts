import { Block } from "shared/utils";

import { template } from "./input-field.tmpl";
import { Input } from "../input";

type Props = {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  name: string;
  errorMessage?: string;
  error?: boolean;
  onChange: (evt: InputEvent) => void;
  onBlur: (evt: InputEvent) => void;
};

type RenderProps = {
  input: any;
};

export class InputField extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      input: new Input({
        ...props,
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
