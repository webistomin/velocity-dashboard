import { VueComponent } from 'types/vue-components';
import { Component, Prop, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseSwitch.sass';

export interface IBaseSwitchProps {
  label: string;
  text?: string;
  id?: string;
  checked?: boolean;
  onInput?: (event: Event) => void;
}

@Component({
  name: 'BaseSwitch',
})
export default class BaseSwitch extends VueComponent<IBaseSwitchProps> {
  @Prop()
  private readonly label!: IBaseSwitchProps['label'];

  @Prop()
  private readonly text!: IBaseSwitchProps['text'];

  @Prop()
  private readonly id!: IBaseSwitchProps['id'];

  @Prop()
  private readonly checked!: IBaseSwitchProps['checked'];

  @Emit('input')
  public onInput(event: Event): Event {
    return event;
  }

  public render(): VNode {
    return (
      <div class='base-switch'>
        <input
          type='checkbox'
          id={this.id}
          class='base-switch__checkbox visually-hidden'
          onInput={this.onInput}
          checked={this.checked}
        />
        <label for={this.id} class='base-switch__label label'>
          <span class='base-switch__text'>
            <strong class='base-switch__title'>{this.label}</strong>
            <span class='base-switch__desc'>{this.text}</span>
          </span>
          <span class='base-switch__slider' />
        </label>
      </div>
    );
  }
}
