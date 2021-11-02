export type TChatItem = {
  id: string;
  avatar: string | null;
  title: string;
  time: string;
  message: string;
  unreadMessages: number;
};

export type TMessage = {
  text: string;
  time: string;
  isUserMessage: boolean;
};

export type TDay = {
  date: string;
  messages: TMessage[];
};
