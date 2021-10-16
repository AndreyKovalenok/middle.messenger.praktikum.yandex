import Handlebars from "handlebars";

import {
  Chats,
  GoBackButton,
  SearchInput,
  ChatHeader,
  ChatActions,
} from "features/chat";

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

const chats = Chats({
  selectedId: "1",
  chats: Array.from(new Array(100), (_, index) => getChatMock(index)),
});
const goBackButton = GoBackButton();
const searchInput = SearchInput();
const chatHeader = ChatHeader({
  avatarSrc: null,
  title: "Вадим",
});
const chatActions = ChatActions();

type RenderProps = {
  chats: string;
  goBackButton: string;
  searchInput: string;
  chatHeader: string;
  chatActions: string;
};

const render = Handlebars.compile<RenderProps>(template);

export const ChatPage = () =>
  render({ chats, goBackButton, searchInput, chatHeader, chatActions });
