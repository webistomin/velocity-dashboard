import { VueComponent } from 'types/vue-components';
import { Component, Prop, Emit } from 'nuxt-property-decorator';
import Vue, { VNode } from 'vue';

// @ts-ignore
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js';

import './BaseSlider.sass';

interface IBaseSliderProps {
  value: number;
  onChange?: (value: number) => number;
  min: number;
  max: number;
  labelStart: string;
  labelEnd: string;
}

@Component({
  name: 'BaseSlider',
  components: { VueSlider },
})
export default class BaseSlider extends VueComponent<IBaseSliderProps> {
  public $refs!: Vue['$refs'] & {
    baseSlider: HTMLElement;
  };

  @Prop({ required: true })
  private readonly value!: IBaseSliderProps['value'];

  @Prop({ required: true })
  private readonly min!: IBaseSliderProps['min'];

  @Prop({ required: true })
  private readonly max!: IBaseSliderProps['max'];

  @Prop({ required: true })
  private readonly labelStart!: IBaseSliderProps['labelStart'];

  @Prop({ required: true })
  private readonly labelEnd!: IBaseSliderProps['labelEnd'];

  @Emit('change')
  public onChange(value: number): number {
    return value;
  }

  public onFocus() {
    this.$refs.baseSlider.focus();
  }

  public onBlur() {
    this.$refs.baseSlider.blur();
  }

  public render(): VNode {
    const { labelStart, labelEnd, min, max, onChange, value } = this;

    return (
      <div class='base-slider' tabIndex={0} onFocus={this.onFocus} onBlur={this.onBlur}>
        <div class='base-slider__heading'>
          <span class='base-slider__text'>{labelStart}</span>
          <span class='base-slider__max'>{labelEnd}</span>
        </div>
        <VueSlider
          ref='baseSlider'
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
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          contained
          class='base-slider__slider'
        />
      </div>
    );
  }
}
