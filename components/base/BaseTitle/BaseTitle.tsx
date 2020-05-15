import Vue, { RenderContext, VNode, CreateElement, PropType } from 'vue';

import './BaseTitle.sass';

export interface IBaseTitleProps {
  level: number;
}

export const BaseTitle = Vue.extend({
  functional: true,
  props: {
    level: {
      type: Number as PropType<IBaseTitleProps['level']>,
      default: 1,
      required: true,
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IBaseTitleProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { level } = ctx.props;
    const HeadingComponent = `h${level}`;
    return (
      <HeadingComponent class={`title base-title base-title_level-${level} ${staticClass || ''} ${cls || ''}`}>
        {ctx.children}
      </HeadingComponent>
    );
  },
});
