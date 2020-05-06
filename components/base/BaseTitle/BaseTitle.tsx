import { RenderContext, VNode } from 'vue';

import './BaseTitle.sass';

export interface IBaseTitleProps {
  level: number;
}

export const BaseTitle = (context: RenderContext<IBaseTitleProps>): VNode => {
  const { level } = context.props;
  const HeadingComponent = `h${level}`;
  return (
    <HeadingComponent
      class={`title base-title base-title_level-${level} ${context.data.staticClass || ''} ${context.data.class ||
        ''}`}>
      {context.children}
    </HeadingComponent>
  );
};
