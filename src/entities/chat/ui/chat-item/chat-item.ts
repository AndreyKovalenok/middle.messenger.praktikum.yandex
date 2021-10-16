import Handlebars from "handlebars";

import { Badge } from "shared/ui";

import { template } from "./chat-item.tmpl";

import type { TChatItem } from "../../types";

const render = Handlebars.compile<RenderProps>(template);

type Props = {} & TChatItem;

type RenderProps = Omit<Props, "unreadMessages"> & {
  badge: string;
};

export const ChatItem = ({ unreadMessages, ...props }: Props) =>
  render({ ...props, badge: Badge({ children: String(unreadMessages) }) });
