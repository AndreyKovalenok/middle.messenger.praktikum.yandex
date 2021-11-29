import { ErrorPageContent } from "shared/ui";
import { Block, compile } from "shared/lib";

import { template } from "./page-404.tmpl";

export class Page404 extends Block {
  constructor() {
    super({});
  }

  render() {
    const content = new ErrorPageContent({
      title: "404",
      description: "Не туда попали",
      href: "/messenger",
      linkText: "Назад к чатам",
    });

    return compile(template, { content });
  }
}
