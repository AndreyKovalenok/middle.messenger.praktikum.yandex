export type TUser = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

export type TChatMessage = {
  user: TUser;
  time: string;
  content: string;
};

export type TGetChatsResponse = {
  id: number;
  title: string;
  avatar: string | null;
  unread_count: number;
  last_message: TChatMessage | null;
};
