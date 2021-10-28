import { Block } from "shared/utils";

import { template } from "./input.tmpl";

type Props = {
  label: string;
  type: string;
  value: string;
  placeholder: string;
  name: string;
  errorMessage?: string;
  error?: boolean;
  events?: any;
};

export class Input extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template);
  }
}
