import Vue, { CreateElement, RenderContext, VNode, PropType } from 'vue';

import './BaseBadge.sass';

export interface IBaseBadgeProps {
  color?: string;
}

export const BaseBadge = Vue.extend({
  name: 'BaseBadge',
  functional: true,
  props: {
    color: {
      type: String as PropType<IBaseBadgeProps['color']>,
      default: 'default',
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IBaseBadgeProps>): VNode {
    return (
      <span
        class={`base-badge base-badge_color_${ctx.props.color} ${ctx.data.staticClass || ''} ${ctx.data.class || ''}`}>
        {ctx.children}
      </span>
    );
  },
});
