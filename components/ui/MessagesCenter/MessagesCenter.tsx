import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseNotify from 'components/base/BaseNotify';
import BaseSidebar from 'components/base/BaseSidebar';
import BaseOverlay from 'components/base/BaseOverlay';
import ChatList from 'components/ui/Chat/ChatList';
import { IChat } from 'common/types/chat/chat-list';

import './MessagesCenter.sass';
import { Watch } from '~/node_modules/nuxt-property-decorator';

@Component({
  name: 'MessagesCenter',
})
export default class MessagesCenter extends VueComponent {
  public isMessagesVisible: boolean = false;

  public chats: IChat[] = [
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

  public toggleMessagesVisibility() {
    this.isMessagesVisible = !this.isMessagesVisible;
  }

  public get shouldLockBody(): boolean {
    return !!(this.isMessagesVisible && window.matchMedia('(max-width: 1023px)').matches);
  }

  public onClickOutside(): void {
    this.isMessagesVisible = false;
  }

  @Watch('$route')
  public onRouteChanged() {
    this.isMessagesVisible = false;
  }

  public toggleModalVisibilityByKeyDown(event: KeyboardEvent) {
    if (this.isMessagesVisible && event.key === 'Escape') {
      this.onClickOutside();
    }
  }

  public mounted(): void {
    document.addEventListener('keydown', this.toggleModalVisibilityByKeyDown);
  }

  public beforeDestroy(): void {
    document.removeEventListener('keydown', this.toggleModalVisibilityByKeyDown);
  }

  public render(): VNode {
    return (
      <div class='messages-center' v-scroll-lock={this.shouldLockBody} v-click-outside={this.onClickOutside}>
        <button
          class={`messages-center__btn btn ${this.isMessagesVisible ? 'messages-center__btn_active' : ''}`}
          type='button'
          onClick={this.toggleMessagesVisibility}
          aria-label='Toggle messages center'>
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
