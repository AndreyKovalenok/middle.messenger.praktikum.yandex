import Handlebars from "handlebars";

import { ChatItem, TChatItem } from "entities/chat";

import { template } from "./chat-item-button.tmpl";

const render = Handlebars.compile<RenderProps>(template);

type Props = {
  isSelected: boolean;
} & TChatItem;

type RenderProps = { isSelected: boolean; children: string };

export const ChatItemButton = ({ isSelected, ...props }: Props) => {
  return render({
    isSelected,
    children: ChatItem(props),
  });
};
