import { Block, compile } from "shared/lib";

import { template } from "./search-icon.tmpl";

export class SearchIcon extends Block {
  constructor() {
    super({});
  }

  render() {
    return compile(template);
  }
}
