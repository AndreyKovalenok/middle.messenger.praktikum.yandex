import { Block, compile } from "shared/lib";

import { template } from "./close.tmpl";

export class CloseIcon extends Block {
  constructor() {
    super({}, "div", {
      style: "display: flex;",
    });
  }

  render() {
    return compile(template);
  }
}
