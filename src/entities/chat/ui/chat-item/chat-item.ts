import Handlebars from "handlebars";

import { Badge } from "shared/ui";

import { template } from "./chat-item.tmpl";

const render = Handlebars.compile<RenderProps>(template);

type Props = {
  avatar: string | null;
  title: string;
  time: string;
  message: string;
  unreadMessages: number;
};

type RenderProps = Omit<Props, "unreadMessages"> & {
  badge: string;
};

export const ChatItem = ({ unreadMessages, ...props }: Props) =>
  render({ ...props, badge: Badge({ children: String(unreadMessages) }) });
