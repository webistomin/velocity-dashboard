import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { IChatFormatted } from 'common/types/chat/chat-list';
import { VNode } from 'vue';

import BaseThumbnail from 'components/base/BaseThumbnail';
import BaseNotify from 'components/base/BaseNotify';

import './ChatList.sass';

export interface IChatListProps {
  chats: IChatFormatted[] | null;
}

@Component({
  name: 'ChatList',
})
export default class ChatList extends VueComponent<IChatListProps> {
  @Prop({ default: null })
  private readonly chats!: IChatListProps['chats'];

  public render(): VNode {
    const chatsList = this.chats
      ? this.chats.map((chat) => {
          return (
            <li class='chat-list__item list-item'>
              <nuxt-link class='chat-list__link link' to={`/chat/${chat.id}`}>
                <span class='chat-list__col chat-list__col_left'>
                  <BaseNotify />
                  <BaseThumbnail image={chat.avatar} alt={chat.name} size='m' />
                </span>
                <span class='chat-list__col chat-list__col_right'>
                  <span class='chat-list__heading'>
                    <strong class='chat-list__name'>{chat.name}</strong>
                    <time class='chat-list__time'>{chat.formattedTime}</time>
                  </span>
                  <span class='chat-list__message'>{chat.message}</span>
                </span>
              </nuxt-link>
            </li>
          );
        })
      : null;
    return (
      <div class='chat-list'>
        <ul class='chat-list__list list'>{chatsList}</ul>
      </div>
    );
  }
}
