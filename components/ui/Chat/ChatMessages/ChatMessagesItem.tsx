import Vue, { CreateElement, RenderContext, VNode, PropType } from 'vue';

import { BaseThumbnail } from 'components/base/BaseThumbnail/BaseThumbnail';
import { IChatMessage } from 'common/types/chat/chat-list';

export interface IChatMessagesItemProps {
  index: number;
  source: object;
}

export const ChatMessagesItem = Vue.extend({
  functional: true,
  props: {
    index: {
      type: Number,
      default: 0,
    },
    source: {
      type: Object,
      default: {} as PropType<IChatMessage>,
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IChatMessagesItemProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { sender, messages } = ctx.props.source as IChatMessage;
    return (
      <div class={`chat-messages__item chat-messages__item_${sender.type} list-item ${staticClass || ''} ${cls || ''}`}>
        <BaseThumbnail class='chat-messages__avatar' image={sender.avatar} size='s' alt={sender.name} />
        <div class='chat-messages__holder'>
          <strong class='chat-messages__name'>{sender.name}</strong>
          <ul class='chat-messages__group-messages list'>
            {messages.map((message) => {
              return (
                <li class='chat-messages__group-item list-item'>
                  <p class='chat-messages__message paragraph'>{message.message}</p>
                  <time class='chat-messages__date'>{message.time}</time>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  },
});
