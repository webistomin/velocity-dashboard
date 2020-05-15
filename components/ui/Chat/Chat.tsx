import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import { IChat } from 'types/chat/chat-list';
import BaseIcon from 'components/base/BaseIcon';
import ChatList from './ChatList';
import ChatMessages from './ChatMessages';
import ChatInfo from './ChatInfo';

import './Chat.sass';

@Component({
  name: 'Chat',
})
export default class Chat extends VueComponent {
  chats: IChat[] = [
    {
      name: 'Alexey Istomin',
      avatar: '/img/avatar.png',
      message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
      id: String(Math.random()),
      time: Date.now(),
    },
    {
      name: 'Alexey Istomin',
      avatar: '/img/avatar.png',
      message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
      id: String(Math.random()),
      time: Date.now(),
    },
    {
      name: 'Alexey Istomin',
      avatar: '/img/avatar.png',
      message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
      id: String(Math.random()),
      time: Date.now(),
    },
    {
      name: 'Alexey Istomin',
      avatar: '/img/avatar.png',
      message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
      id: String(Math.random()),
      time: Date.now(),
    },
    {
      name: 'Alexey Istomin',
      avatar: '/img/avatar.png',
      message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
      id: String(Math.random()),
      time: Date.now(),
    },
    {
      name: 'Alexey Istomin',
      avatar: '/img/avatar.png',
      message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
      id: String(Math.random()),
      time: Date.now(),
    },
    {
      name: 'Alexey Istomin',
      avatar: '/img/avatar.png',
      message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
      id: String(Math.random()),
      time: Date.now(),
    },
    {
      name: 'Alexey Istomin',
      avatar: '/img/avatar.png',
      message: 'You are most welcome Kathey! You are most welcome Kathey! You are most welcome Kathey!',
      id: String(Math.random()),
      time: Date.now(),
    },
  ];

  isMobileChatVisible: boolean = false;
  isMobile: boolean = true;

  created(): void {
    if (this.$route.params.id) {
      this.isMobileChatVisible = true;
    }
  }

  mounted(): void {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      this.isMobile = false;
    }
  }

  hideChat(): void {
    this.isMobileChatVisible = false;
  }

  get isChatHeaderVisible(): boolean {
    if (this.isMobile) {
      return this.isMobileChatVisible;
    }

    return true;
  }

  get isChatListVisible(): boolean {
    if (this.isMobile) {
      return !this.isMobileChatVisible;
    }

    return true;
  }

  get isChatMessagesVisible(): boolean {
    if (this.isMobile) {
      return this.isMobileChatVisible;
    }

    return true;
  }

  get isChatInfoVisible(): boolean {
    if (this.isMobile) {
      return this.isMobileChatVisible;
    }

    return true;
  }

  public render(): VNode {
    return (
      <div class='chat'>
        <div class='chat__header' vShow={this.isChatHeaderVisible}>
          <nuxt-link class='chat__back link' to='/chat' onClick={this.hideChat}>
            <BaseIcon name='icon-arrow-right' color='blue' size='xs' />
          </nuxt-link>
        </div>
        {/*
        // @ts-ignore */}
        <ChatList class='chat__user-list' chats={this.chats} vShow={this.isChatListVisible} />
        {/*
        // @ts-ignore */}
        <ChatMessages class='chat__user-messages' vShow={this.isChatMessagesVisible} />
        {/*
        // @ts-ignore */}
        <ChatInfo class='chat__user-desc' vShow={this.isChatInfoVisible} />
      </div>
    );
  }
}
