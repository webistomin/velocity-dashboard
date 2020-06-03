import Vue, { CreateElement, PropType, RenderContext, VNode } from 'vue';

import './BaseEmpty.sass';

export interface IBaseEmptyProps {
  text?: string;
}

export const BaseEmpty = Vue.extend({
  functional: true,
  props: {
    text: {
      type: String as PropType<IBaseEmptyProps['text']>,
      default: 'No data was provided',
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IBaseEmptyProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { text } = ctx.props;
    return (
      <div class={`base-empty ${staticClass || ''} ${cls || ''}`}>
        <v-lazy-image src='/img/empty.svg' width={184} height={152} alt='Empty box' class='base-empty__img image' />
        <strong data-jest='base-empty__title' class='base-empty__title caption'>
          {text}
        </strong>
      </div>
    );
  },
});
