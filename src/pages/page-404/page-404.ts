import { ErrorPageContent } from "shared/ui";
import { Block } from "shared/utils";

import { template } from "./page-404.tmpl";

type Props = {};

type RenderProps = {
  content: any;
};

export class Page404 extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      content: new ErrorPageContent({
        title: "404",
        description: "Не туда попали",
        href: "/chats",
        linkText: "Назад к чатам",
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}
