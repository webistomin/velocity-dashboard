import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTitle from 'components/base/BaseTitle';
import { BaseIcon } from 'components/base/BaseIcon/BaseIcon';
import { animateValue } from '~/utils/animate-value';

import './BaseStat.sass';

export enum DynamicTypes {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
}

export type IBaseStatAlignTypes = 'row' | 'col';

export interface IBaseStatProps {
  value: number;
  prevValue?: number;
  measure: string;
  icon?: string;
  color?: string;
  align?: IBaseStatAlignTypes;
}

@Component({
  name: 'BaseStat',
})
export default class BaseStat extends VueComponent<IBaseStatProps> {
  animatedValue: IBaseStatProps['value'] = 0;

  @Prop()
  private readonly value!: IBaseStatProps['value'];

  @Prop({ default: 0 })
  private readonly prevValue: IBaseStatProps['prevValue'];

  @Prop()
  private readonly measure!: IBaseStatProps['measure'];

  @Prop()
  private readonly icon!: IBaseStatProps['icon'];

  @Prop()
  private readonly color!: IBaseStatProps['color'];

  @Prop({ default: 'col' })
  private readonly align!: IBaseStatProps['align'];

  mounted(): void {
    animateValue.call(this, 'animatedValue', 0, this.value, 2000);
  }

  get getStat(): string {
    // @ts-ignore
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
      <div class={`base-stat base-stat_align_${this.align}`}>
        {this.icon ? <BaseIcon class='base-stat__icon' name={this.icon} color={this.color} /> : null}
        <div class='base-stat__holder'>
          <div class='base-stat__heading'>
            <BaseTitle level={2} class='base-stat__title'>
              {this.animatedValue}
            </BaseTitle>
            <strong class='base-stat__measure'>{this.measure}</strong>
          </div>
          {this.prevValue ? (
            <span
              class={`base-stat__dynamic ${
                this.getDynamic === DynamicTypes.POSITIVE
                  ? 'base-stat__dynamic_positive'
                  : 'base-stat__dynamic_negative'
              }`}>
              <svg-icon name={this.getIconName} width={10} height={10} />
              <span class='base-stat__percent'>{this.getStat}%</span>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}
