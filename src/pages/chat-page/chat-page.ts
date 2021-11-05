import {
  Chats,
  GoBackButton,
  SearchInput,
  ChatHeader,
  ChatActions,
} from "features/chat";
import { Messages } from "entities/chat";
import { Block, compile } from "shared/lib";

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

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  render() {
    const goBackButton = new GoBackButton({
      onClick: () => {
        console.log("click");
      },
    });
    const searchInput = new SearchInput({
      name: "search",
      value: "",
      onChange: () => console.log("change"),
    });
    const chats = new Chats({
      selectedId: null,
      chats: Array.from(new Array(100), (_, index) => getChatMock(index)),
      setSelectedElement: (id) =>
        this.setProps({
          ...this.props,
          selectedId: id,
        }),
    });
    const chatHeader = new ChatHeader({
      avatarSrc: null,
      title: "Вадим",
      onActionsClick: () => console.log("onActionsClick"),
    });
    const chatMessages = new Messages({
      days: [
        {
          date: "01.01.1970",
          messages: messagesMockArray,
        },
      ],
    });
    const chatActions = new ChatActions({
      onActionsClick: () => console.log("onActionsClick"),
      onSendMessage: () => console.log("onSendMessage"),
      onBlur: () => console.log("onBlur"),
      onFocus: () => console.log("onFocus"),
      onChange: () => console.log("onChange"),
      messageInputValue: "123",
    });

    return compile(template, {
      goBackButton,
      searchInput,
      chats,
      chatHeader,
      chatMessages,
      chatActions,
    });
  }
}
