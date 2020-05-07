import './BaseSidebar.sass';
import { RenderContext, VNode } from 'vue';

export const BaseSidebar = (context: RenderContext<{}>): VNode => {
  return <aside class='base-sidebar'>{context.children}</aside>;
};
