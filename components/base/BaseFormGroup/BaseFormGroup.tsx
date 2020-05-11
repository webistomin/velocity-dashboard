import { Component, Prop, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';
// @ts-ignore
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor';

import './BaseFormGroup.sass';
import { VueComponent } from 'types/vue-components';

export type BaseFormGroupTypes =
  | 'email'
  | 'date'
  | 'datetime-local'
  | 'file'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface IBaseFormGroupProps {
  type?: BaseFormGroupTypes;
  label?: string;
  id?: string;
  value: string | number;
  name?: string;
  placeholder?: string;
  autocomplete?: string;
  onInput: () => string | number;
  onBlur?: () => void;
}

@Component({
  name: 'BaseFormGroup',
  mixins: [singleErrorExtractorMixin],
})
export default class BaseFormGroup extends VueComponent<IBaseFormGroupProps> {
  public activeErrorMessages!: string[];

  @Prop({ default: 'text' })
  private readonly type!: IBaseFormGroupProps['type'];

  @Prop()
  private readonly label!: IBaseFormGroupProps['label'];

  @Prop()
  private readonly id!: IBaseFormGroupProps['id'];

  @Prop()
  private readonly value!: IBaseFormGroupProps['value'];

  @Prop()
  private readonly name!: IBaseFormGroupProps['name'];

  @Prop()
  private readonly placeholder!: IBaseFormGroupProps['placeholder'];

  @Prop()
  private readonly autocomplete!: IBaseFormGroupProps['autocomplete'];

  public get isInputInvalid(): boolean {
    return Boolean(this.activeErrorMessages && this.activeErrorMessages.length);
  }

  @Emit('input')
  public onInput(event: KeyboardEvent): string | number {
    const target = event.target as HTMLInputElement;
    return target.value;
  }

  @Emit('blur')
  public onBlur(): void {}

  render(): VNode {
    return (
      <div class='base-form-group'>
        <div class='base-form-group__heading'>
          {this.label ? (
            <label for={this.id} class='base-form-group__label caption label'>
              {this.label}
            </label>
          ) : null}
          {this.$slots.heading}
        </div>
        <div class='base-form-group__content'>
          <input
            type={this.type}
            id={this.id}
            aria-label={this.label}
            name={this.name}
            onInput={this.onInput}
            onBlur={this.onBlur}
            value={this.value}
            aria-describedby={`errors-${this.id}`}
            autoComplete={this.autocomplete}
            placeholder={this.placeholder}
            class={`${this.isInputInvalid ? 'base-form-group__input_invalid' : ''} base-form-group__input`}
          />
          {this.isInputInvalid ? (
            <ul class='base-form-group__errors list' id={`errors-${this.id}`}>
              {this.activeErrorMessages.map((error: string, index: number) => {
                return (
                  <li class='base-form-group__error list-item' key={`${error}-${index}`}>
                    {error}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
