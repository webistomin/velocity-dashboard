import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTitle from 'components/base/BaseTitle';

import './BaseStat.sass';
import { animateValue } from '~/utils/animate-value';

export enum DynamicTypes {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
}

export interface IBaseStatProps {
  value: number;
  prevValue: number;
  measure: string;
}

@Component({
  name: 'BaseStat',
})
export default class BaseStat extends VueComponent<IBaseStatProps> {
  animatedValue: IBaseStatProps['value'] = 0;

  @Prop()
  private readonly value!: IBaseStatProps['value'];

  @Prop()
  private readonly prevValue!: IBaseStatProps['prevValue'];

  @Prop()
  private readonly measure!: IBaseStatProps['measure'];

  mounted(): void {
    animateValue.call(this, 'animatedValue', 0, this.value, 2000);
  }

  get getStat(): string {
    return (((this.value - this.prevValue) / this.prevValue) * 100).toFixed(1);
  }

  get getDynamic(): string {
    const value = Number(this.getStat);
    if (value <= 0) {
      return DynamicTypes.NEGATIVE;
    }

    return DynamicTypes.POSITIVE;
  }

  get getIconName(): string {
    const dynamic = this.getDynamic;
    if (dynamic === DynamicTypes.NEGATIVE) {
      return 'icon-arrow-down';
    }

    return 'icon-arrow-up';
  }

  render(): VNode {
    return (
      <div class='base-stat'>
        <div class='base-stat__heading'>
          <BaseTitle level={2} class='base-stat__title'>
            {this.animatedValue}
          </BaseTitle>
          <strong class='base-stat__measure'>{this.measure}</strong>
        </div>
        <span
          class={`base-stat__dynamic ${
            this.getDynamic === DynamicTypes.POSITIVE ? 'base-stat__dynamic_positive' : 'base-stat__dynamic_negative'
          }`}>
          <svg-icon name={this.getIconName} width={10} height={10} />
          <span class='base-stat__percent'>{this.getStat}%</span>
        </span>
      </div>
    );
  }
}
