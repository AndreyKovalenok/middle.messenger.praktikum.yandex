import { Block, compile } from "shared/lib";

import { template } from "./loader.tmpl";

export class Loader extends Block {
  constructor() {
    super({});
  }

  render() {
    return compile(template);
  }
}
