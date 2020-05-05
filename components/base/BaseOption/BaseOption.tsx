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
  onInput: (e: Event) => void;
}

@Component({
  name: 'BaseOption',
})
export default class BaseOption extends VueComponent<IBaseOptionProps> {
  @Prop()
  private readonly type!: IBaseOptionProps['type'];

  @Prop()
  private readonly label!: IBaseOptionProps['label'];

  @Prop()
  private readonly value!: IBaseOptionProps['value'];

  @Prop()
  private readonly name!: IBaseOptionProps['name'];

  @Prop()
  private readonly id!: IBaseOptionProps['id'];

  @Prop()
  private readonly checked!: IBaseOptionProps['checked'];

  @Emit('input')
  onInput(event: Event): Event {
    return event;
  }

  render(): VNode {
    return (
      <div class={`base-option`}>
        <input
          type={this.type}
          id={this.id}
          aria-label={this.label}
          onInput={this.onInput}
          value={this.value}
          class='base-option__input visually-hidden'
          name={this.name}
          checked={this.checked}
        />
        <label class='base-option__label label' for={this.id}>
          {this.$slots.default}
        </label>
      </div>
    );
  }
}
