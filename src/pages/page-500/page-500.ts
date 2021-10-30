import { ErrorPageContent } from "shared/ui";
import { Block } from "shared/utils";

import { template } from "./page-500.tmpl";

type Props = {};

type RenderProps = {
  content: any;
};

export class Page500 extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      content: new ErrorPageContent({
        title: "500",
        description: "Мы уже фиксим",
        href: "/chats",
        linkText: "Назад к чатам",
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
