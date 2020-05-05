import { RenderContext, VNode } from 'vue';

import './BaseIcon.sass';

export type IBaseIconSize = 'xs' | 's' | 'm' | 'l';

export interface IBaseIconProps {
  size?: IBaseIconSize;
  name: string;
  color?: string;
}

export const BaseIcon = (context: RenderContext<IBaseIconProps>): VNode => {
  const { size = 's', name, color = 'gray' } = context.props;
  const { staticClass, class: cls } = context.data;
  return (
    <span class={`base-icon base-icon_size_${size} base-icon_color_${color} ${staticClass || ''} ${cls || ''}`}>
      <svg-icon name={name} class='icon base-icon__icon' />
    </span>
  );
};
