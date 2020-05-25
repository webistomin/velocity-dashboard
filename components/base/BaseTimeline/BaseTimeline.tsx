import Vue, { CreateElement, PropType, RenderContext, VNode } from 'vue';

import BaseIcon from 'components/base/BaseIcon';

import './BaseTimeline.sass';

export interface ITimeline {
  icon: string;
  color: string;
  text: string;
}

export interface IBaseTimelineProps {
  timeline: ITimeline[];
}

export const BaseTimeline = Vue.extend({
  functional: true,
  props: {
    timeline: {
      type: Array as PropType<IBaseTimelineProps['timeline']>,
      default: () => [],
      required: true,
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IBaseTimelineProps>): VNode {
    return (
      <div class={`base-timeline ${ctx.data.class || ''} ${ctx.data.staticClass || ''}`}>
        <ul class='base-timeline__list list'>
          {ctx.props.timeline.map((line) => {
            return (
              <li class='base-timeline__item list-item'>
                <BaseIcon size='xs' name={line.icon} color={line.color} />
                <span class='base-timeline__text'>{line.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
});
