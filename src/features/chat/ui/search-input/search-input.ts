import { Block, compile } from "shared/lib";

import { SearchIcon } from "shared/icons";

import { template } from "./search-input.tmpl";
import * as styles from "./style.scss";

type InputProps = {
  value: string;
  name: string;
  onChange: (evt: InputEvent) => void;
};

class Input extends Block<Omit<InputProps, "onChange">> {
  constructor({ onChange, ...props }: Props) {
    super(
      {
        ...props,
        events: {
          change: onChange,
        },
      },
      "input",
      {
        class: styles.input,
        placeholder: "Поиск",
        type: "Текст",
        name: props.name,
        value: props.value,
      }
    );
  }

  render() {
    return compile("");
  }
}

type Props = {
  value: string;
  name: string;
  onChange: (evt: InputEvent) => void;
};

export class SearchInput extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const icon = new SearchIcon();
    const input = new Input(this.props);

    return compile(template, {
      input,
      icon,
    });
  }
}
