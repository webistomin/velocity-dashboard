import { VueComponent } from 'types/vue-components';
import { Component, Prop, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import VSelect from 'vue-select';

import './BaseSelect.sass';

export interface IBaseSelectProps {
  options: string[];
  value: string;
  onInput?: (value: string) => string;
  id: string;
  label: string;
  placeholder?: string;
}

@Component({
  name: 'BaseSelect',
  components: { VSelect },
})
export default class BaseSelect extends VueComponent<IBaseSelectProps> {
  @Prop({ required: true })
  private readonly options!: IBaseSelectProps['options'];

  @Prop({ required: true })
  private readonly value!: IBaseSelectProps['value'];

  @Prop({ required: true })
  private readonly id!: IBaseSelectProps['id'];

  @Prop({ required: true })
  private readonly label!: IBaseSelectProps['label'];

  @Prop()
  private readonly placeholder!: IBaseSelectProps['placeholder'];

  @Emit('input')
  public onInput(value: string): string {
    return value;
  }

  public render(): VNode {
    const { id, label, value, onInput, options, placeholder } = this;

    return (
      <div class='base-select'>
        <label for={id} class='base-select__label'>
          {label}
        </label>
        <VSelect
          value={value}
          onInput={onInput}
          options={options.sort()}
          inputId={id}
          clearable={false}
          placeholder={placeholder}
          class='base-select__select'>
          <template slot='open-indicator'>
            <span />
          </template>
        </VSelect>
      </div>
    );
  }
}
