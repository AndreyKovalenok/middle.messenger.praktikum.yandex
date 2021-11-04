import { ErrorPageContent } from "shared/ui";
import { Block, compile } from "shared/lib";

import { template } from "./page-500.tmpl";

export class Page500 extends Block {
  constructor() {
    super({});
  }

  render() {
    const content = new ErrorPageContent({
      title: "500",
      description: "Мы уже фиксим",
      href: "/chats",
      linkText: "Назад к чатам",
    });

    return compile(template, { content });
  }
}
