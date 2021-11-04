import { BlockV2, compile } from "shared/utils";

import { template } from "./input.tmpl";
import * as styles from "./style.scss";

type Props = {
  type: string;
  value: string;
  placeholder: string;
  name: string;
  error?: boolean;
  onChange: (evt: InputEvent) => void;
  onBlur: (evt: InputEvent) => void;
  onFocus: (evt: InputEvent) => void;
};

const getClass = (isError: boolean) => {
  if (isError) {
    return `${styles.input} ${styles.inputError}`;
  }

  return `${styles.input}`;
};

export class Input extends BlockV2<
  Omit<Props, "onChange" | "onBlur" | "onFocus">
> {
  constructor({ onChange, onBlur, onFocus, ...props }: Props) {
    super(
      {
        ...props,
        events: {
          input: onChange,
          blur: onBlur,
          focus: onFocus,
        },
      },
      "input",
      {
        type: props.type,
        value: props.value,
        placeholder: props.placeholder,
        name: props.name,
        class: getClass(Boolean(props.error)),
      }
    );
  }

  render() {
    return compile(template, this.props);
  }
}
