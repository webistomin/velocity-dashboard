import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTitle from 'components/base/BaseTitle';
import { animateValue } from '~/utils/animate-value';

import './BaseCirclularGraph.sass';

export interface IBaseCircularGraphProps {
  value: number;
}

@Component({
  name: 'BaseCircularGraph',
})
export default class BaseCircularGraph extends VueComponent<IBaseCircularGraphProps> {
  @Prop({ default: 0 })
  private readonly value!: IBaseCircularGraphProps['value'];

  public animatedValue: IBaseCircularGraphProps['value'] = 0;

  public mounted(): void {
    animateValue.call(this, 'animatedValue', 0, this.value, 2000);
  }

  render(): VNode {
    return (
      <div class='base-circular-graph'>
        <svg xmlns='http://www.w3.org/2000/svg' width={223} viewBox='0 0 223 140.5' class='base-circular-graph__base'>
          <defs>
            <clipPath id='base-circular-graph-clip-path-1'>
              <path
                d='M0,124,4.5,36,76,0h62l74.5,42.5,10.5,45L211,139l-45.5-9L51,128,0,140.5Z'
                transform='translate(0.5)'
                fill='#fff'
              />
            </clipPath>
          </defs>
          <g transform='translate(-0.5)' clip-path='url(#base-circular-graph-clip-path-1)'>
            <g
              transform='translate(32.6 40.6)'
              fill='none'
              stroke='#e0e7ff'
              stroke-miterlimit='10'
              stroke-width='24'
              stroke-dasharray='1.6 5'>
              <circle cx='76' cy='76' r='76' stroke='none' />
              <circle cx='76' cy='76' r='88' fill='none' />
            </g>
            <g
              transform='translate(41 48.6)'
              fill='none'
              stroke='#e0e7ff'
              stroke-miterlimit='10'
              stroke-width='2'
              stroke-dasharray='1 4.8'>
              <circle cx='68' cy='68' r='68' stroke='none' />
              <circle cx='68' cy='68' r='67' fill='none' />
            </g>
          </g>
        </svg>
        <div class='base-circular-graph__fill' style={{ width: `${this.value}%` }}>
          <svg xmlns='http://www.w3.org/2000/svg' width={223} viewBox='0 0 223 140.5'>
            <defs>
              <clipPath id='base-circular-graph-clip-path-2'>
                <path
                  d='M0,124,4.5,36,76,0h62l74.5,42.5,10.5,45L211,139l-45.5-9L51,128,0,140.5Z'
                  transform='translate(0.5)'
                  fill='#fff'
                />
              </clipPath>
            </defs>
            <g transform='translate(-0.5)' clip-path='url(#base-circular-graph-clip-path-1)'>
              <g transform='translate(3 -5)'>
                <g>
                  <g
                    transform='translate(30 45.6)'
                    fill='none'
                    stroke='rgb(var(--color-primary))'
                    stroke-miterlimit='10'
                    stroke-width='24'
                    stroke-dasharray='1.6 5'>
                    <circle cx='76' cy='76' r='76' stroke='none' />
                    <circle cx='76' cy='76' r='88' fill='none' />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class='base-circular-graph__info'>
          <BaseTitle level={2} class='base-circular-graph__title'>
            {this.animatedValue}
          </BaseTitle>
          <p class='base-circular-graph__caption caption paragraph'>
            Operating <br /> score
          </p>
        </div>
      </div>
    );
  }
}
