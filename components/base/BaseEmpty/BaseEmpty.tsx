import Vue, { CreateElement, RenderContext, VNode } from 'vue';

import './BaseEmpty.sass';

export const BaseEmpty = Vue.extend({
  functional: true,
  render(_h: CreateElement, ctx: RenderContext<{}>): VNode {
    const { staticClass, class: cls } = ctx.data;
    return (
      <div class={`base-empty ${staticClass || ''} ${cls || ''}`}>
        <v-lazy-image src='/img/empty.svg' width={184} height={152} alt='Empty box' class='base-empty__img image' />
        <strong class='base-empty__title caption'>No data was provided</strong>
      </div>
    );
  },
});
