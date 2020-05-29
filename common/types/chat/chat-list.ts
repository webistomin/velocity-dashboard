export interface IChat {
  avatar?: string;
  name: string;
  message: string;
  id: string;
  time: Date;
}

export interface IChatFormatted extends IChat {
  formattedTime: string;
}

export type IChatMessageSender = 'own' | 'other';

export interface IChatMessageItem {
  message: string;
  time: string;
}

export interface IChatMessage {
  id: string;
  sender: {
    name: string;
    avatar?: string;
    type: IChatMessageSender;
  };
  messages: IChatMessageItem[];
}
