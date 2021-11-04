import { Block, compile } from "shared/lib";

import { template } from "./dots-icon.tmpl";

export class DotsIcon extends Block {
  constructor() {
    super({});
  }

  render() {
    return compile(template);
  }
}
