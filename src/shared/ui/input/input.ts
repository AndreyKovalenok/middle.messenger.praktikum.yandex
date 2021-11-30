import { Block, compile } from "shared/lib";

import { template } from "./input.tmpl";
import styles from "./style.scss";

type Props = {
  type: string;
  value: string;
  placeholder: string;
  name: string;
  error?: boolean;
  touched?: boolean;
  onChange: (evt: InputEvent) => void;
  onBlur: (evt: InputEvent) => void;
  onFocus: (evt: InputEvent) => void;
};

const getClass = (isError: boolean, touched: boolean) => {
  if (isError && touched) {
    return `${styles.input} ${styles.inputError}`;
  }

  return `${styles.input}`;
};

export class Input extends Block<
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
        class: getClass(Boolean(props.error), Boolean(props.touched)),
      }
    );
  }

  render() {
    return compile(template, this.props);
  }
}
