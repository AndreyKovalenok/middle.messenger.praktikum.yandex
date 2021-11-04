import { Block, compile } from "shared/lib";

import { template } from "./input-field.tmpl";
import { Input } from "../input";

type Props = {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  name: string;
  errorMessage?: string;
  onChange: (evt: InputEvent) => void;
  onBlur: (evt: InputEvent) => void;
  onFocus: (evt: InputEvent) => void;
};

export class InputField extends Block<Props> {
  constructor(props: Props) {
    super(
      {
        ...props,
      },
      "div"
    );
  }

  render() {
    const input = new Input({
      ...this.props,
      error: Boolean(this.props.errorMessage),
    });

    return compile(template, {
      input,
      ...this.props,
    });
  }
}
