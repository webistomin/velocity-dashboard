import Vue, { RenderContext, CreateElement, VNode } from 'vue';

import './BaseNotify.sass';

export const BaseNotify = Vue.extend({
  functional: true,
  render(_h: CreateElement, ctx: RenderContext<{}>): VNode {
    const { staticClass, class: cls } = ctx.data;
    return <span class={`base-notify ${cls || ''} ${staticClass || ''}`} />;
  },
});
