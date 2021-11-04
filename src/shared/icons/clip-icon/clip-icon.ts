import { Block, compile } from "shared/lib";

import { template } from "./clip-icon.tmpl";

export class ClipIcon extends Block {
  constructor() {
    super({});
  }

  render() {
    return compile(template);
  }
}
