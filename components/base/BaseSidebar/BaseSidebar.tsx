import Vue, { RenderContext, VNode, CreateElement, PropType } from 'vue';

import './BaseSidebar.sass';

export interface IBaseSidebarProps {
  isVisible: boolean;
}

export const BaseSidebar = Vue.extend({
  functional: true,
  props: {
    isVisible: {
      type: Boolean as PropType<IBaseSidebarProps['isVisible']>,
      default: false,
      required: true,
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IBaseSidebarProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { isVisible } = ctx.props;
    return (
      <aside class={`base-sidebar ${staticClass || ''} ${cls || ''} ${isVisible ? 'base-sidebar_visible' : ''}`}>
        {ctx.children}
      </aside>
    );
  },
});
