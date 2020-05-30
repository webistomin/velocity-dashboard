import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
// @ts-ignore
import VirtualList from 'vue-virtual-scroll-list';

import { IChatMessage } from 'common/types/chat/chat-list';
import { ChatMessagesItem } from './ChatMessagesItem';

import './ChatMessages.sass';

export interface IChatMessagesProps {
  messages: IChatMessage[];
}

@Component({
  name: 'ChatMessages',
  components: { VirtualList },
})
export default class ChatMessages extends VueComponent<IChatMessagesProps> {
  @Prop({ required: true })
  private readonly messages!: IChatMessagesProps['messages'];

  $refs!: {
    chatMessagesContent: HTMLDivElement;
  };

  public async mounted(): Promise<void> {
    await this.$nextTick();

    const list = this.$refs.chatMessagesContent;
    list.scrollTop = list.scrollHeight;
  }

  public render(): VNode {
    return (
      <div class='chat-messages'>
        <div class='chat-messages__content' ref='chatMessagesContent'>
          <VirtualList
            tabindex={0}
            class={`chat-messages__list list`}
            data-key='id'
            data-sources={this.messages}
            data-component={ChatMessagesItem}
            wrap-class='chat-messages__scroller-wrapper'
            item-class='chat-messages__scroller-item'
          />
        </div>
        <div class='chat-messages__controls'>
          <div class='chat-messages__inputs'>
            <button class='chat-messages__emoji-picker btn' type='button'>
              <svg-icon name='icon-smile' width={20} height={20} />
            </button>
            <input type='text' class='chat-messages__input' placeholder='Message' />
            <div class='chat-messages__attach'>
              <input type='file' id='chat-attach' class='chat-messages__attach-input visually-hidden' />
              <label for='chat-attach' class='chat-messages__attach-label label'>
                <svg-icon name='icon-attach' width={23} height={20} />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
