import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseSwitch.sass';

export interface IBaseSwitchProps {
  label: string;
  text?: string;
  value: boolean;
  id?: string;
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
  private readonly value!: IBaseSwitchProps['value'];

  @Prop()
  private readonly id!: IBaseSwitchProps['id'];

  public render(): VNode {
    return (
      <div class='base-switch'>
        <input type='checkbox' id={this.id} class='base-switch__checkbox visually-hidden' />
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
