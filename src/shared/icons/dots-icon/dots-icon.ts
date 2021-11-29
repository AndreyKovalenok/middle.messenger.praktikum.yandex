import { Block, compile } from "shared/lib";

import { template } from "./dots-icon.tmpl";

export class DotsIcon extends Block {
  constructor() {
    super({}, "div", {
      style: "display: flex;",
    });
  }

  render() {
    return compile(template);
  }
}
