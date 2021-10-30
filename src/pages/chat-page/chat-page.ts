import {
  Chats,
  GoBackButton,
  SearchInput,
  ChatHeader,
  ChatActions,
} from "features/chat";
import { Messages } from "entities/chat";
import { Block } from "shared/utils";

import { template } from "./chat-page.tmpl";

const getChatMock = (index: number) => ({
  id: String(index),
  avatar: null,
  title: "тет-а-теты",
  time: "15:12",
  message:
    "И Human Interface Guidelines и Material Design рекомендуют И Human Interface Guidelines и Material Design рекомендуют",
  unreadMessages: 15000,
});

type Props = {};

type RenderProps = {
  chats: any;
  goBackButton: any;
  searchInput: any;
  chatHeader: any;
  chatActions: any;
  chatMessages: any;
};

export class ChatPage extends Block<Props, RenderProps> {
  constructor(props: Props) {
    super({
      ...props,
      goBackButton: new GoBackButton({
        onClick: () => {
          console.log("click");
        },
      }),
      searchInput: new SearchInput({
        onChange: () => {
          console.log("change");
        },
      }),
      chats: new Chats({
        selectedId: "1",
        chats: Array.from(new Array(100), (_, index) => getChatMock(index)),
      }),
      chatHeader: new ChatHeader({
        avatarSrc: null,
        title: "Вадим",
      }),
      chatMessages: new Messages({}),
      chatActions: new ChatActions({}),
    });
  }

  render() {
    return this.compile(template);
  }
}
