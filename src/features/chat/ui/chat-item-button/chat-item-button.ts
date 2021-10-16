import Handlebars from "handlebars";

import { ChatItem } from "entities/chat";

import { template } from "./chat-item-button.tmpl";

const render = Handlebars.compile<RenderProps>(template);

type ChatItemProps = Parameters<typeof ChatItem>["0"];

type Props = ChatItemProps;

type RenderProps = { children: string };

export const ChatItemButton = (props: Props) => {
  return render({
    children: ChatItem(props),
  });
};
