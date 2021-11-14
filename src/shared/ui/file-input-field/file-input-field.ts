import { Block, compile } from "shared/lib";

import { FileInput } from "../file-input";
import { template } from "./file-input-field.tmpl";
import * as styles from "./style.scss";

type Props = {
  name: string;
  text: string;
  onChange: (evt: any) => void;
};

export class FileInputField extends Block<Props> {
  constructor(props: Props) {
    super(props, "label", { class: styles.label });
  }

  render() {
    const input = new FileInput({
      name: this.props.name,
      onChange: this.props.onChange,
    });

    return compile(template, { ...this.props, input });
  }
}
