import { VueComponent } from 'types/vue-components';
import { Component, Prop, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseSlider.sass';

interface IBaseSliderProps {
  value: number;
  onChange: (value: number) => number;
  min: number;
  max: number;
  labelStart: string;
  labelEnd: string;
}

@Component({
  name: 'BaseSlider',
})
export default class BaseSlider extends VueComponent<IBaseSliderProps> {
  @Prop()
  private readonly value!: IBaseSliderProps['value'];

  @Prop()
  private readonly min!: IBaseSliderProps['min'];

  @Prop()
  private readonly max!: IBaseSliderProps['max'];

  @Prop()
  private readonly labelStart!: IBaseSliderProps['labelStart'];

  @Prop()
  private readonly labelEnd!: IBaseSliderProps['labelEnd'];

  @Emit('change')
  onChange(value: number): number {
    return value;
  }

  public render(): VNode {
    return (
      <div class='base-slider'>
        <div class='base-slider__heading'>
          <span class='base-slider__text'>{this.labelStart}</span>
          <span class='base-slider__max'>{this.labelEnd}</span>
        </div>
        <VueSlider
          dotSize={16}
          tooltipPlacement='bottom'
          useKeyboard
          dotStyle={{
            boxShadow: 'none',
            border: '0.4rem solid rgb(var(--color-primary))',
          }}
          railStyle={{
            borderRadius: '99px',
            backgroundColor: 'rgba(var(--color-primary), 0.1)',
          }}
          processStyle={{
            backgroundColor: 'rgb(var(--color-primary))',
          }}
          tooltipStyle={{
            backgroundColor: 'rgb(var(--color-primary))',
            borderColor: 'rgb(var(--color-primary))',
          }}
          min={this.min}
          max={this.max}
          value={this.value}
          onChange={this.onChange}
          class='base-slider__slider'
        />
      </div>
    );
  }
}
