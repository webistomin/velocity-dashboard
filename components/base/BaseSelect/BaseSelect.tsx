import { VueComponent } from 'types/vue-components';
import { Component, Prop, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseSelect.sass';

export interface IBaseSelectProps {
  options: string[];
  value: string;
  onInput: (value: string) => string;
  id: string;
  label: string;
  placeholder?: string;
}

@Component({
  name: 'BaseSelect',
})
export default class BaseSelect extends VueComponent<IBaseSelectProps> {
  @Prop()
  private readonly options!: IBaseSelectProps['options'];

  @Prop()
  private readonly value!: IBaseSelectProps['value'];

  @Prop()
  private readonly id!: IBaseSelectProps['id'];

  @Prop()
  private readonly label!: IBaseSelectProps['label'];

  @Prop()
  private readonly placeholder!: IBaseSelectProps['placeholder'];

  @Emit('input')
  onInput(value: string): string {
    return value;
  }

  public render(): VNode {
    return (
      <div class='base-select'>
        <label for={this.id} class='base-select__label'>
          {this.label}
        </label>
        <VSelect
          value={this.value}
          onInput={this.onInput}
          options={this.options}
          inputId={this.id}
          clearable={false}
          placeholder={this.placeholder}
          class='base-select__select'>
          <template slot='open-indicator'>
            <span />
          </template>
        </VSelect>
      </div>
    );
  }
}
