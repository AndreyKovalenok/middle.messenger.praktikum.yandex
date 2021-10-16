import Handlebars from "handlebars";

import { TChatItem } from "entities/chat";

import { template } from "./chats.tmpl";
import { ChatItemButton } from "../chat-item-button";

const render = Handlebars.compile<RenderProps>(template);

type Props = {
  selectedId: string | null;
  chats: TChatItem[];
};

type RenderProps = { content: string };

export const Chats = ({ chats, selectedId }: Props) => {
  return render({
    content: chats.reduce(
      (acc, curr) =>
        acc + ChatItemButton({ ...curr, isSelected: curr.id === selectedId }),
      ""
    ),
  });
};
