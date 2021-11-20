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
import Router from "shared/lib/router";
import { ROUTES } from "shared/config";
import { InputModal, Loader } from "shared/ui";
import { authModel } from "features/auth";

import { template } from "./chat-page.tmpl";
import { TMessage } from "entities/chat/types";

type Props = {
  messages: TMessage[];
  isLoading: boolean;
  userId: string | null;
  isChatsLoading: boolean;
  isAddChatModalActive: boolean;
  isAddUserModalActive: boolean;
  isDeleteUserModalActive: boolean;
  selectedChat: TChatItem | null;
  chats: TChatItem[];
};

export class ChatPage extends Block<Props> {
  socket: WebSocket | null;

  constructor() {
    super({
      messages: [],
      isLoading: false,
      userId: null,
      isChatsLoading: false,
      chats: [],
      selectedChat: null,
      isAddChatModalActive: false,
      isAddUserModalActive: false,
      isDeleteUserModalActive: false,
    });

    this.socket = null;
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

  chatMessageHandler(message: MessageEvent<any>) {
    const data = JSON.parse(message.data);

    const messages = Array.isArray(data)
      ? chatMappers.mapMessages(data, Number(this.props.userId))
      : [
          ...chatMappers.mapMessages([data], Number(this.props.userId)),
          ...this.props.messages,
        ];

    this.setProps({
      ...this.props,
      messages,
    });
  }

  async createSocketConnection(id: string, userId: string) {
    const { token } = await chatsModel.token(id);

    const socket = chatsModel.createSocket({
      chatId: id,
      token,
      userId,
    });

    this.socket = socket;

    this.setProps({
      ...this.props,
      messages: [],
    });

    socket.addEventListener("message", this.chatMessageHandler.bind(this));
  }

  selectChatHandler = async (chat: TChatItem) => {
    this.setProps({
      ...this.props,
      selectedChat: chat,
    });

    if (this.props.userId) {
      this.createSocketConnection(chat.id, this.props.userId);
    }
  };

  sendMessageHandler = (message: string) => {
    if (message) {
      this.socket?.send(
        JSON.stringify({
          content: message,
          type: "message",
        })
      );
    }
  };

  addUserHandler = async (login: string) => {
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
  };

  deleteUserHandler = async (login: string) => {
    if (this.props.selectedChat?.id) {
      const user = await chatsModel.searchUser(login);
      if (user) {
        await chatsModel.deleteUser(
          Number(this.props.selectedChat.id),
          user[0].id
        );
      }
    }
    this.setProps({ ...this.props, isDeleteUserModalActive: false });
  };

  addChatHandler = async (title: string) => {
    await chatsModel.addChat(title);
    this.fetchChats();
    this.setProps({ ...this.props, isAddChatModalActive: false });
  };

  async fetchUser() {
    this.setProps({
      ...this.props,
      isLoading: true,
    });

    const data = await authModel.getUser();

    if (data) {
      this.setProps({ ...this.props, userId: String(data.id) });
    }

    this.setProps({
      ...this.props,
      isLoading: false,
    });
  }

  componentDidMount() {
    this.fetchChats();
    this.fetchUser();
  }

  render() {
    const goBackButton = new GoBackButton({
      onClick: () => Router.go(ROUTES.settings),
    });
    const searchInput = new SearchInput({
      name: "search",
      value: "",
      onChange: () => console.log("change"),
    });
    const chats = new Chats({
      selectedId: this.props.selectedChat?.id ?? null,
      chats: this.props.chats,
      setSelectedElement: this.selectChatHandler,
    });
    const chatHeader = new ChatHeader({
      avatarSrc: this.props.selectedChat?.avatar ?? "",
      title: this.props.selectedChat?.title ?? "",
      onAddUserClick: () => {
        this.setProps({ ...this.props, isAddUserModalActive: true });
      },
      onRemoveUserClick: () => {
        this.setProps({ ...this.props, isDeleteUserModalActive: true });
      },
    });
    const chatMessages = new Messages({
      days: [
        {
          date: "01.01.1970",
          messages: this.props.messages,
        },
      ],
    });
    const chatActions = new ChatActions({
      onActionsClick: () => console.log("onActionsClick"),
      onSendMessage: this.sendMessageHandler,
    });

    const addChatButton = new AddChatButton({
      onClick: () => {
        this.setProps({ ...this.props, isAddChatModalActive: true });
      },
    });

    const addChatModal = new InputModal({
      buttonText: "Добавить",
      inputLabel: "Название чата",
      onSubmit: this.addChatHandler,
      onClose: () => {
        this.setProps({ ...this.props, isAddChatModalActive: false });
      },
      title: "Добавить чат",
    });

    const addUserModal = new InputModal({
      buttonText: "Добавить",
      inputLabel: "Login",
      title: "Добавить пользователя",
      onSubmit: this.addUserHandler,
      onClose: () => {
        this.setProps({ ...this.props, isAddUserModalActive: false });
      },
    });

    const deleteUserModal = new InputModal({
      buttonText: "Удалить",
      inputLabel: "Login",
      title: "Удалить пользователя",
      onSubmit: this.deleteUserHandler,
      onClose: () => {
        this.setProps({ ...this.props, isDeleteUserModalActive: false });
      },
    });

    const loader = new Loader();

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
      deleteUserModal,
      loader,
    });
  }
}
