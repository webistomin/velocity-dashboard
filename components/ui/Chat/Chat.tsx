import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { formatDistance, format } from 'date-fns';

import { IChat, IChatFormatted, IChatMessage } from 'common/types/chat/chat-list';
import BaseIcon from 'components/base/BaseIcon';
import { BaseEmpty } from 'components/base/BaseEmpty/BaseEmpty';
import ChatList from './ChatList';
import ChatMessages from './ChatMessages';
import ChatInfo from './ChatInfo';

import './Chat.sass';

@Component({
  name: 'Chat',
})
export default class Chat extends VueComponent {
  public chats: IChat[] = [
    {
      name: 'Alexey Istomin',
      avatar: '/img/avatar.png',
      message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
      id: 'abc132',
      time: new Date(),
    },
  ];

  public messages: IChatMessage[] = [
    {
      id: 'message-1',
      sender: {
        type: 'other',
        avatar: '/img/avatar.png',
        name: 'Alexey Istomin',
      },
      messages: [
        {
          message: 'Hi, I have trouble with trip #12422',
          time: format(new Date(), 'hh:mm'),
        },
      ],
    },
    {
      id: 'message-2',
      sender: {
        type: 'own',
        avatar: '/img/avatar-2.png',
        name: 'Anna',
      },
      messages: [
        {
          message: 'Hello Alexey, thank you for calling Provide Support. How may I help you?',
          time: format(new Date(), 'hh:mm'),
        },
      ],
    },
    {
      id: 'message-3',
      sender: {
        type: 'other',
        avatar: '/img/avatar.png',
        name: 'Alexey Istomin',
      },
      messages: [
        {
          message: 'I have trouble with the driver.',
          time: format(new Date(), 'hh:mm'),
        },
        {
          message: 'Could I get a refund?',
          time: format(new Date(), 'hh:mm'),
        },
      ],
    },
    {
      id: 'message-4',
      sender: {
        type: 'own',
        avatar: '/img/avatar-2.png',
        name: 'Anna',
      },
      messages: [
        {
          message: 'Sure Alexey. Your money had been refunded',
          time: format(new Date(), 'hh:mm'),
        },
        {
          message: 'Refund #12422',
          time: format(new Date(), 'hh:mm'),
        },
        {
          message: 'Have a nice day!',
          time: format(new Date(), 'hh:mm'),
        },
      ],
    },
    {
      id: 'message-3',
      sender: {
        type: 'other',
        avatar: '/img/avatar.png',
        name: 'Alexey Istomin',
      },
      messages: [
        {
          message: 'Thanks. You too!',
          time: format(new Date(), 'hh:mm'),
        },
      ],
    },
  ];

  public isMobileChatVisible: boolean = false;
  public isMobile: boolean = true;

  public selectedChat: IChat['id'] | null = null;

  public created(): void {
    const id = this.$route.params.id;
    if (id) {
      this.isMobileChatVisible = true;
      this.selectedChat = id;
    }
  }

  public mounted(): void {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      this.isMobile = false;
    }
  }

  public hideChat(): void {
    this.isMobileChatVisible = false;
  }

  public get getFormattedChatList(): IChatFormatted[] {
    const chats = this.chats;
    return chats.map((chat) => {
      return {
        ...chat,
        ...{ formattedTime: formatDistance(chat.time, new Date()) },
      };
    });
  }

  public get isChatHeaderVisible(): boolean {
    if (this.isMobile) {
      return this.isMobileChatVisible;
    }

    return false;
  }

  public get isChatListVisible(): boolean {
    if (this.isMobile) {
      return !this.isMobileChatVisible;
    }

    return true;
  }

  public get isChatMessagesVisible(): boolean {
    if (this.selectedChat) {
      if (this.isMobile) {
        return this.isMobileChatVisible;
      }

      return true;
    }

    return false;
  }

  public get isChatInfoVisible(): boolean {
    if (this.selectedChat) {
      if (this.isMobile) {
        return this.isMobileChatVisible;
      }

      return true;
    }

    return false;
  }

  public get isEmptyBlockVisible(): boolean {
    if (this.isMobile) {
      return false;
    } else if (!this.selectedChat) {
      return true;
    }

    return false;
  }

  public render(): VNode {
    return (
      <div class='chat'>
        {this.isChatHeaderVisible ? (
          <div class='chat__header'>
            <nuxt-link class='chat__back link' to='/chat' onClick={this.hideChat}>
              <BaseIcon name='icon-arrow-right' color='default' size='xs' />
            </nuxt-link>
          </div>
        ) : null}

        {this.isChatListVisible ? <ChatList class='chat__user-list' chats={this.getFormattedChatList} /> : null}

        {this.isChatMessagesVisible ? (
          <ChatMessages messages={this.messages} class='chat__user-messages' />
        ) : this.isEmptyBlockVisible ? (
          <BaseEmpty class='chat__user-messages chat__user-messages-empty' text='Click on chat to start conversation' />
        ) : null}

        {this.isChatInfoVisible ? (
          <ChatInfo class='chat__user-desc' />
        ) : this.isEmptyBlockVisible ? (
          <BaseEmpty
            class='chat__user-desc chat__user-desc-empty'
            text='Information about client will appear here immediately'
          />
        ) : null}
      </div>
    );
  }
}
