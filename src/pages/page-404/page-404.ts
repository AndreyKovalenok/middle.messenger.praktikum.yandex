import Handlebars from "handlebars";

import { ErrorPageContent, Link } from "shared/ui";

import { template } from "./page-404.tmpl";

type RenderProps = {
  content: string;
};

const render = Handlebars.compile<RenderProps>(template);

export const Page404 = () =>
  render({
    content: ErrorPageContent({
      title: "404",
      description: "Не туда попали",
      link: new Link({
        href: "/chats",
        children: "Назад к чатам",
      }),
    }),
  });
