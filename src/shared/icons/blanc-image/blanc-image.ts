import { Block, compile } from "shared/lib";

import { template } from "./blanc-image.tmpl";

export class BlancImage extends Block {
  constructor() {
    super({});
  }

  render() {
    return compile(template);
  }
}
