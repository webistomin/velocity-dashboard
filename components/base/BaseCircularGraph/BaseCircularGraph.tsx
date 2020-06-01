import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import Vue, { VNode } from 'vue';
import { nanoid } from 'nanoid';

import BaseTitle from 'components/base/BaseTitle';
import { animateValue } from '~/utils/animate-value';

import './BaseCirclularGraph.sass';

export interface IBaseCircularGraphProps {
  value: number;
  graphId?: string;
}

@Component({
  name: 'BaseCircularGraph',
})
export default class BaseCircularGraph extends VueComponent<IBaseCircularGraphProps> {
  public $refs!: Vue['$refs'] & {
    progressBar: SVGPathElement;
  };

  @Prop({ default: 0, required: true })
  private readonly value!: IBaseCircularGraphProps['value'];

  @Prop()
  private readonly graphId!: IBaseCircularGraphProps['graphId'];

  duration: number = 2000;
  percent: number = this.value / 100;
  startValue: number = 0;
  id: string = 'base-circular-graph-mask';

  public animatedValue: IBaseCircularGraphProps['value'] = 0;

  created() {
    if (this.graphId) {
      this.id = `base-circular-graph-mask-${this.graphId}`;
    } else {
      this.id = `base-circular-graph-mask-${nanoid()}`;
    }
  }

  public mounted(): void {
    animateValue.call(this, 'animatedValue', this.startValue, this.value, this.duration);
    this.startCircularProgress(this.percent, this.duration);
  }

  public startCircularProgress(percentage: number, speed: number) {
    let startTimestamp: number = 0;
    let x = this.startValue;
    const step = (timestamp: number) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const progress = Math.min((timestamp - startTimestamp) / speed, 1);
      x = progress * percentage;
      if (progress < 1) {
        window.requestAnimationFrame(step);
        this.drawProgress(x);
      }
    };
    window.requestAnimationFrame(step);
  }

  public clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
  }

  public drawProgress(percent: number) {
    if (isNaN(percent)) {
      return;
    }

    percent = this.clamp(parseFloat(String(percent)), 0, 1);

    const angle = this.clamp(percent * 180, 0, 359.99999);
    const paddedRadius = 49 + 1;
    const radians = (angle * Math.PI) / 180;
    const x = Math.sin(radians) * paddedRadius;
    const y = Math.cos(radians) * -paddedRadius;
    const mid = angle > 180 ? 1 : 0;
    const pathData = 'M 0 0 v -%@ A %@ %@ 1 '.replace(/%@/gi, String(paddedRadius)) + mid + ' 1 ' + x + ' ' + y + ' z';

    const bar = this.$refs.progressBar;
    bar.setAttribute('d', pathData);
  }

  render(): VNode {
    return (
      <div class='base-circular-graph'>
        <div class='base-circular-graph__wrapper'>
          <svg
            class='base-circular-graph__progress'
            viewBox='0 0 100 100'
            width={223}
            height={223}
            shape-rendering='geometricPrecision'>
            <defs>
              <mask id={this.id} x='0' y='0' width='120' height='120' maskUnits='userSpaceOnUse'>
                <circle cx='50' cy='50' r='51' stroke-width='0' fill='black' opacity='1' />
                <circle
                  id='bar'
                  r='50'
                  cx='50'
                  cy='50'
                  fill='transparent'
                  stroke-dasharray='1'
                  stroke-dashoffset='1000'
                  stroke='white'
                  stroke-width='16'
                />
                <circle
                  class='base-circular-graph__progress-inner'
                  cx='50'
                  cy='50'
                  r='40'
                  stroke-width='0'
                  fill='black'
                  opacity='1'
                />
              </mask>
            </defs>
            <g mask={`url(#${this.id})`}>
              <circle
                class='base-circular-graph__track'
                cx='50'
                cy='50'
                r='50'
                opacity='1'
                fill='rgba(var(--color-primary), 0.2)'
              />
              <path class='base-circular-graph__bar' ref='progressBar' d='M 0 0' fill='rgb(var(--color-primary))' />
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
