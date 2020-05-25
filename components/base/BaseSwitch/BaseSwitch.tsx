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
  @Prop({ required: true })
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
    const { id, onInput, checked, label, text } = this;

    return (
      <div class='base-switch'>
        <input
          type='checkbox'
          id={id}
          class='base-switch__checkbox visually-hidden'
          onInput={onInput}
          checked={checked}
        />
        <label for={id} class='base-switch__label label'>
          <span class='base-switch__text'>
            <strong class='base-switch__title'>{label}</strong>
            <span class='base-switch__desc'>{text}</span>
          </span>
          <span class='base-switch__slider' />
        </label>
      </div>
    );
  }
}
