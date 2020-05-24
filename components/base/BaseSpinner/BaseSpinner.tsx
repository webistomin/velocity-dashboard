import Vue, { RenderContext, VNode, CreateElement, PropType } from 'vue';

import './BaseSpinner.sass';

export type IBaseSpinnerSize = 'xs' | 's' | 'm';

export interface IBaseSpinnerProps {
  size?: IBaseSpinnerSize;
}

export const BaseSpinner = Vue.extend({
  functional: true,
  props: {
    size: {
      type: String as PropType<IBaseSpinnerProps['size']>,
      default: 'xs',
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IBaseSpinnerProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { size } = ctx.props;
    return (
      <span class={`base-spinner base-spinner_size_${size} ${staticClass || ''} ${cls || ''}`}>{ctx.children}</span>
    );
  },
});
