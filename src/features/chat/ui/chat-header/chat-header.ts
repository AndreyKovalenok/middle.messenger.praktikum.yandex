import Handlebars from "handlebars";

import { Avatar, IconButton } from "shared/ui";
import { DotsIcon } from "shared/icons";

import { template } from "./chat-header.tmpl";

const render = Handlebars.compile<RenderProps>(template);

type Props = {
  title: string;
  avatarSrc: string | null;
};

type RenderProps = Omit<Props, "avatarSrc"> & {
  avatar: string;
  actionsButton: string;
};

export const ChatHeader = ({ avatarSrc, ...props }: Props) =>
  render({
    ...props,
    avatar: Avatar({ src: avatarSrc }),
    actionsButton: IconButton({
      icon: DotsIcon(),
    }),
  });
