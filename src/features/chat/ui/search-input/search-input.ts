import { Block } from "shared/utils";

import { template } from "./search-input.tmpl";

type Props = {
  onChange: () => void;
};

export class SearchInput extends Block<Omit<Props, "onChange">> {
  constructor({ onChange, ...props }: Props) {
    super({
      ...props,
      events: {
        change: onChange,
      },
    });
  }

  render() {
    return this.compile(template);
  }
}
