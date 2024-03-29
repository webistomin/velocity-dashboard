import { Component, Prop, Emit } from 'nuxt-property-decorator';
import { VueComponent } from 'types/vue-components';
import Vue, { VNode } from 'vue';
import { Validation } from 'vuelidate';
// @ts-ignore
import { singleErrorExtractorMixin } from 'vuelidate-error-extractor';
import { TheMask } from 'vue-the-mask';

import './BaseFormGroup.sass';

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
  onInput: (event: string) => any;
  onBlur?: () => void;
  mask?: string;
  validator?: Validation;
  isTextarea?: boolean;
}

@Component({
  name: 'BaseFormGroup',
  mixins: [singleErrorExtractorMixin],
  components: { TheMask },
})
export default class BaseFormGroup extends VueComponent<IBaseFormGroupProps> {
  public $refs!: Vue['$refs'] & {
    baseTextarea: HTMLTextAreaElement;
  };

  public activeErrorMessages!: string[];

  @Prop({ default: 'text' })
  private readonly type!: IBaseFormGroupProps['type'];

  @Prop()
  private readonly label!: IBaseFormGroupProps['label'];

  @Prop()
  private readonly id!: IBaseFormGroupProps['id'];

  @Prop({ required: true })
  private readonly value!: IBaseFormGroupProps['value'];

  @Prop()
  private readonly name!: IBaseFormGroupProps['name'];

  @Prop()
  private readonly placeholder!: IBaseFormGroupProps['placeholder'];

  @Prop()
  private readonly autocomplete!: IBaseFormGroupProps['autocomplete'];

  @Prop()
  private readonly mask!: IBaseFormGroupProps['mask'];

  @Prop()
  private readonly isTextarea!: IBaseFormGroupProps['isTextarea'];

  public get isInputInvalid(): boolean {
    return Boolean(this.activeErrorMessages && this.activeErrorMessages.length);
  }

  @Emit('input')
  public onInput(event: KeyboardEvent): string | number {
    const target = event.target as HTMLInputElement;

    if (this.isTextarea) {
      const el = this.$refs.baseTextarea as HTMLTextAreaElement;
      const BORDER_WIDTH = 1;
      el.setAttribute('style', `height:${target.scrollHeight + BORDER_WIDTH * 2}px;overflow-y:hidden;`);
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight + BORDER_WIDTH * 2}px`;
    }

    return target.value;
  }

  @Emit('input')
  public onMaskedInput(value: string | number): string | number {
    return value;
  }

  @Emit('blur')
  public onBlur(): void {}

  public render(): VNode {
    return (
      <div class='base-form-group'>
        <div class='base-form-group__heading'>
          {this.label ? (
            <label for={this.id} class='base-form-group__label caption label' data-jest='base-form-group__label'>
              {this.label}
            </label>
          ) : null}
          {this.$slots.heading}
        </div>
        <div class='base-form-group__content'>
          {this.mask ? (
            /*
            // @ts-ignore */
            <TheMask
              data-jest='base-form-group__mask'
              type={this.type}
              id={this.id}
              aria-label={this.label}
              name={this.name}
              onInput={this.onMaskedInput}
              nativeOnBlur={this.onBlur}
              value={this.value}
              aria-describedby={`errors-${this.id}`}
              autoComplete={this.autocomplete}
              placeholder={this.placeholder}
              class={`${this.isInputInvalid ? 'base-form-group__input_invalid' : ''} base-form-group__input`}
              mask={this.mask}
              masked
            />
          ) : this.isTextarea ? (
            <textarea
              data-jest='base-form-group__textarea'
              id={this.id}
              aria-label={this.label}
              name={this.name}
              onInput={this.onInput}
              onBlur={this.onBlur}
              value={this.value}
              aria-describedby={`errors-${this.id}`}
              autoComplete={this.autocomplete}
              placeholder={this.placeholder}
              class={`${this.isInputInvalid ? 'base-form-group__input_invalid' : ''} base-form-group__input textarea`}
              ref='baseTextarea'
              rows={1}
              cols={1}
            />
          ) : (
            <input
              data-jest='base-form-group__input'
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
          )}

          {this.isInputInvalid ? (
            <ul class='base-form-group__errors list' id={`errors-${this.id}`}>
              {this.activeErrorMessages.slice(0, 1).map((error: string, index: number) => {
                return (
                  <li
                    data-jest='base-form-group__error'
                    class='base-form-group__error list-item'
                    key={`${error}-${index}`}>
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
