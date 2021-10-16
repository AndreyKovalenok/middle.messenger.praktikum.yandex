import Handlebars from "handlebars";

import { Badge, Avatar } from "shared/ui";

import { template } from "./chat-item.tmpl";

import type { TChatItem } from "../../types";

const render = Handlebars.compile<RenderProps>(template);

type Props = {} & TChatItem;

type RenderProps = Omit<Props, "unreadMessages" | "avatar"> & {
  badge: string;
  avatar: string;
};

export const ChatItem = ({ unreadMessages, avatar, ...props }: Props) =>
  render({
    ...props,
    badge: Badge({ children: String(unreadMessages) }),
    avatar: Avatar({
      src: avatar,
    }),
  });
