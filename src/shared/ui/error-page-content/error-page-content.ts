import { Block } from "shared/utils";

import { template } from "./error-page-content.tmpl";

type Props = {
  link: string;
  title: string;
  description: string;
};

export class ErrorPageContent extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template);
  }
}
