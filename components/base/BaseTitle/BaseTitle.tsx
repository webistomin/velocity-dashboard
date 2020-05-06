import Vue, { CreateElement, PropType, RenderContext, VNode } from 'vue';

import './BaseTitle.sass';

export interface IBaseTitleProps {
  level: number;
}

export const BaseTitle = Vue.extend({
  name: 'BaseTitle',
  functional: true,
  props: {
    level: {
      type: Number as PropType<IBaseTitleProps['level']>,
      required: true,
    },
  },
  render(_h: CreateElement, context: RenderContext): VNode {
    const { level } = context.props;
    const HeadingComponent = `h${level}`;
    return (
      <HeadingComponent
        class={`title base-title base-title_level-${level} ${context.data.staticClass || ''} ${context.data.class ||
          ''}`}>
        {context.children}
      </HeadingComponent>
    );
  },
});
