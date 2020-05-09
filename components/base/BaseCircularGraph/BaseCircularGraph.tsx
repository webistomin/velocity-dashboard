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
  animatedValue: IBaseCircularGraphProps['value'] = 0;

  @Prop({ default: 0 })
  private readonly value!: IBaseCircularGraphProps['value'];

  mounted(): void {
    animateValue.call(this, 'animatedValue', 0, this.value, 2000);
  }

  render(): VNode {
    return (
      <div class='base-circular-graph'>
        <svg xmlns='http://www.w3.org/2000/svg' width={223} viewBox='0 0 223 140.5' class='base-circular-graph__base'>
          <defs>
            <clipPath id='clip-path'>
              <path
                id='mask'
                d='M0,124,4.5,36,76,0h62l74.5,42.5,10.5,45L211,139l-45.5-9L51,128,0,140.5Z'
                transform='translate(0.5)'
                fill='#fff'
              />
            </clipPath>
            <clipPath id='clip-path-2'>
              <path id='Mask-2' data-name='Mask' d='M0,0H168l35.5,71L168,87.5V152H0Z' fill='#fff' />
            </clipPath>
          </defs>
          <g id='Chart_Figure' data-name='Chart Figure' transform='translate(-0.5)' clip-path='url(#clip-path)'>
            <g
              id='external_dashes'
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
              id='inner_dashes'
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
              <clipPath id='clip-path'>
                <path
                  id='mask'
                  d='M0,124,4.5,36,76,0h62l74.5,42.5,10.5,45L211,139l-45.5-9L51,128,0,140.5Z'
                  transform='translate(0.5)'
                  fill='#fff'
                />
              </clipPath>
              <clipPath id='clip-path-2'>
                <path id='Mask-2' data-name='Mask' d='M0,0H168l35.5,71L168,87.5V152H0Z' fill='#fff' />
              </clipPath>
            </defs>
            <g id='Chart_Figure' data-name='Chart Figure' transform='translate(-0.5)' clip-path='url(#clip-path)'>
              <g id='colored' transform='translate(3 -5)'>
                <g id='colored-2' data-name='colored'>
                  <g
                    id='color_dashes'
                    transform='translate(30 45.6)'
                    fill='none'
                    stroke='#2e5bff'
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
