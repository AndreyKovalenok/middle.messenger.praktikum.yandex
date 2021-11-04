import { Block, compile } from "shared/lib";

import { template } from "./left-arrow-ellipse.tmpl";

export class LeftArrowEllipse extends Block {
  constructor() {
    super({});
  }

  render() {
    return compile(template);
  }
}
