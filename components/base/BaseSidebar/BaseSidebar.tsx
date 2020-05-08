import { RenderContext, VNode } from 'vue';

import './BaseSidebar.sass';

export interface IBaseSidebarProps {
  isVisible: boolean;
}

export const BaseSidebar = (context: RenderContext<IBaseSidebarProps>): VNode => {
  const { staticClass, class: cls } = context.data;
  const { isVisible } = context.props;
  return (
    <aside class={`base-sidebar ${staticClass || ''} ${cls || ''} ${isVisible ? 'base-sidebar_visible' : ''}`}>
      {context.children}
    </aside>
  );
};
