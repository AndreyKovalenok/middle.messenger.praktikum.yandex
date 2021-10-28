import Handlebars from "handlebars";

import { ErrorPageContent, Link } from "shared/ui";

import { template } from "./page-500.tmpl";

type RenderProps = {
  content: string;
};

const render = Handlebars.compile<RenderProps>(template);

export const Page500 = () =>
  render({
    content: ErrorPageContent({
      title: "500",
      description: "Мы уже фиксим",
      link: new Link({
        href: "/chats",
        children: "Назад к чатам",
      }),
    }),
  });
