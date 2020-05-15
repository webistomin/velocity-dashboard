import Vue, { RenderContext, VNode, CreateElement, PropType } from 'vue';

import './BaseIcon.sass';

export type IBaseIconSize = 'xs' | 's' | 'm' | 'l';

export interface IBaseIconProps {
  size?: IBaseIconSize;
  name: string;
  color?: string;
}

export const BaseIcon = Vue.extend({
  functional: true,
  props: {
    size: {
      type: String as PropType<IBaseIconSize>,
      default: 's',
    },
    name: {
      type: String as PropType<IBaseIconProps['name']>,
      required: true,
      default: '',
    },
    color: {
      type: String as PropType<IBaseIconProps['color']>,
      default: '',
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IBaseIconProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { size, color, name } = ctx.props;
    return (
      <span class={`base-icon base-icon_size_${size} base-icon_color_${color} ${staticClass || ''} ${cls || ''}`}>
        <svg-icon name={name} class='icon base-icon__icon' />
      </span>
    );
  },
});
