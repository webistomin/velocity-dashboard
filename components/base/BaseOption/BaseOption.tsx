import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseOption.sass';

export type IBaseOptionTypes = 'checkbox' | 'radio';

export interface IBaseOptionProps {
  type: IBaseOptionTypes;
  label?: string;
  value: string[] | string;
  name: string;
  id: string;
  checked?: boolean;
  onInput?: (e: Event) => void;
}

@Component({
  name: 'BaseOption',
})
export default class BaseOption extends VueComponent<IBaseOptionProps> {
  @Prop({ required: true })
  private readonly type!: IBaseOptionProps['type'];

  @Prop()
  private readonly label!: IBaseOptionProps['label'];

  @Prop({ required: true })
  private readonly value!: IBaseOptionProps['value'];

  @Prop({ required: true })
  private readonly name!: IBaseOptionProps['name'];

  @Prop({ required: true })
  private readonly id!: IBaseOptionProps['id'];

  @Prop()
  private readonly checked!: IBaseOptionProps['checked'];

  @Emit('input')
  public onInput(event: Event): Event {
    return event;
  }

  public render(): VNode {
    const { type, id, label, value, name, checked, onInput } = this;

    return (
      <div class={`base-option`}>
        <input
          type={type}
          id={id}
          aria-label={label}
          onInput={onInput}
          value={value}
          class='base-option__input visually-hidden'
          name={name}
          checked={checked}
        />
        <label class='base-option__label label' for={id}>
          {this.$slots.default}
        </label>
      </div>
    );
  }
}
