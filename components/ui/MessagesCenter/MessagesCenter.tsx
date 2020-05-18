import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseNotify from 'components/base/BaseNotify';
import BaseSidebar from 'components/base/BaseSidebar';
import BaseOverlay from 'components/base/BaseOverlay';
import ChatList from 'components/ui/Chat/ChatList';
import { IChat } from 'types/chat/chat-list';

import './MessagesCenter.sass';
import { Watch } from '~/node_modules/nuxt-property-decorator';

@Component({
  name: 'MessagesCenter',
})
export default class MessagesCenter extends VueComponent {
  isMessagesVisible: boolean = false;

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

  toggleMessagesVisibility() {
    this.isMessagesVisible = !this.isMessagesVisible;
  }

  get shouldLockBody(): boolean {
    return !!(this.isMessagesVisible && window.matchMedia('(max-width: 1023px)').matches);
  }

  onClickOutside(): void {
    this.isMessagesVisible = false;
  }

  @Watch('$route')
  onRouteChanged() {
    this.isMessagesVisible = false;
  }

  render(): VNode {
    return (
      <div class='messages-center' v-scroll-lock={this.shouldLockBody} v-click-outside={this.onClickOutside}>
        <button
          class={`messages-center__btn btn ${this.isMessagesVisible ? 'messages-center__btn_active' : ''}`}
          type='button'
          onClick={this.toggleMessagesVisibility}>
          <span class='messages-center__btn-content'>
            <BaseNotify class='messages-center__status' />
            <svg-icon name='icon-mail' width={23} height={18} />
          </span>
        </button>

        <BaseSidebar isVisible={this.isMessagesVisible} class='messages-center__sidebar'>
          <ChatList chats={this.chats} />
        </BaseSidebar>

        <BaseOverlay
          class='messages-center__overlay'
          isVisible={this.isMessagesVisible}
          onClick={this.onClickOutside}
        />
      </div>
    );
  }
}
