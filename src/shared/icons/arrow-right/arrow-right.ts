import { Block, compile } from "shared/lib";

import { template } from "./arrow-right.tmpl";

export class ArrowRight extends Block {
  constructor() {
    super({});
  }

  render() {
    return compile(template);
  }
}
