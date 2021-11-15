import {
  Chats,
  GoBackButton,
  SearchInput,
  ChatHeader,
  ChatActions,
  AddChatButton,
  chatsModel,
} from "features/chat";
import { Messages, chatModel, TChatItem, chatMappers } from "entities/chat";
import { Block, compile } from "shared/lib";
import { router } from "shared/utils";
import { InputModal } from "shared/ui";

import { template } from "./chat-page.tmpl";

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

type Props = {
  isChatsLoading: boolean;
  isAddChatModalActive: boolean;
  isAddUserModalActive: boolean;
  selectedChat: TChatItem | null;
  chats: TChatItem[];
};

export class ChatPage extends Block<Props> {
  constructor() {
    super({
      isChatsLoading: false,
      chats: [],
      selectedChat: null,
      isAddChatModalActive: false,
      isAddUserModalActive: false,
    });
  }

  async fetchChats() {
    this.setProps({
      ...this.props,
      isChatsLoading: true,
    });

    const chats = await chatModel.getChats();

    this.setProps({
      ...this.props,
      isChatsLoading: true,
      chats: chatMappers.mapChats(chats),
    });
  }

  componentDidMount() {
    this.fetchChats();
  }

  render() {
    const goBackButton = new GoBackButton({
      onClick: () => router.go("/profile"),
    });
    const searchInput = new SearchInput({
      name: "search",
      value: "",
      onChange: () => console.log("change"),
    });
    const chats = new Chats({
      selectedId: this.props.selectedChat?.id ?? null,
      chats: this.props.chats,
      setSelectedElement: (chat) =>
        this.setProps({
          ...this.props,
          selectedChat: chat,
        }),
    });
    const chatHeader = new ChatHeader({
      avatarSrc: this.props.selectedChat?.avatar ?? "",
      title: this.props.selectedChat?.title ?? "",
      onAddUserClick: () => {
        this.setProps({ ...this.props, isAddUserModalActive: true });
      },
      onRemoveUserClick: () => {},
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

    const addChatButton = new AddChatButton({
      onClick: () => {
        this.setProps({ ...this.props, isAddChatModalActive: true });
      },
    });

    const addChatModal = new InputModal({
      buttonText: "Добавить",
      inputLabel: "Название чата",
      onSubmit: async (title: string) => {
        await chatsModel.addChat(title);
        this.setProps({ ...this.props, isAddChatModalActive: false });
      },
      onClose: () => {
        this.setProps({ ...this.props, isAddChatModalActive: false });
      },
      title: "Добавить чат",
    });

    const addUserModal = new InputModal({
      buttonText: "Добавить",
      inputLabel: "Login",
      title: "Добавить пользователя",

      onSubmit: async (login: string) => {
        if (this.props.selectedChat?.id) {
          const user = await chatsModel.searchUser(login);
          if (user) {
            await chatsModel.addUser(
              Number(this.props.selectedChat.id),
              user[0].id
            );
          }
        }
        this.setProps({ ...this.props, isAddUserModalActive: false });
      },
      onClose: () => {
        this.setProps({ ...this.props, isAddUserModalActive: false });
      },
    });

    return compile(template, {
      ...this.props,
      selectedId: this.props.selectedChat?.id,
      goBackButton,
      searchInput,
      chats,
      chatHeader,
      chatMessages,
      chatActions,
      addChatButton,
      addChatModal,
      addUserModal,
    });
  }
}
