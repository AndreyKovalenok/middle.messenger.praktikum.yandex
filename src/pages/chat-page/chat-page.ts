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

const messagesMock = [
  {
    isUserMessage: false,
    text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
    time: "12:00",
  },
  {
    isUserMessage: true,
    text: "Круто!",
    time: "12:01",
  },
];

const messagesMockArray = Array.from(
  new Array(100),
  (_, index) => messagesMock[index % 2 ? 0 : 1]
);

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
      chatMessages: new Messages({
        days: [
          {
            date: "01.01.1970",
            messages: messagesMockArray,
          },
        ],
      }),
      chatActions: new ChatActions({}),
    });
  }

  render() {
    return this.compile(template);
  }
}
