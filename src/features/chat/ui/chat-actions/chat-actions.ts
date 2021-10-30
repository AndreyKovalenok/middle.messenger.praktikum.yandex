import { Block } from "shared/utils";

import { template } from "./chat-actions.tmpl";

type Props = {};

export class ChatActions extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return this.compile(template);
  }
}
