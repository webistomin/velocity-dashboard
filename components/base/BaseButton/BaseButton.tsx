import { Prop, Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { VueComponent } from 'types/vue-components';
import { ButtonTypes } from 'types/common/button-types';

import './BaseButton.sass';

export type BaseButtonThemes = 'default' | 'light' | 'success' | 'gray';

export interface IBaseButtonProps {
  type?: ButtonTypes;
  isDisabled?: boolean;
  isLoading?: boolean;
  icon?: string;
  theme?: BaseButtonThemes;
  onClick: () => void;
}

@Component({
  name: 'BaseButton',
})
export default class BaseButton extends VueComponent<IBaseButtonProps> {
  @Prop({ default: 'button' })
  private readonly type!: IBaseButtonProps['type'];

  @Prop({ default: false })
  private readonly isDisabled!: IBaseButtonProps['isDisabled'];

  @Prop({ default: false })
  private readonly isLoading!: IBaseButtonProps['isLoading'];

  @Prop({ default: '' })
  private readonly icon!: IBaseButtonProps['icon'];

  @Prop({ default: 'default' })
  private readonly theme!: IBaseButtonProps['theme'];

  public onClick(): void {
    this.$emit('click');
  }

  public get getClassnames(): string[] {
    const result = [`base-button_theme_${this.theme}`];

    if (this.isDisabled) {
      result.push('base-button_disabled');
    }

    if (this.isLoading) {
      result.push('base-button_loading');
    }

    return result;
  }

  public render(): VNode {
    return (
      <button
        type={this.type}
        class={`base-button btn ${this.getClassnames.join(' ')}`}
        disabled={this.isDisabled}
        onClick={this.onClick}>
        <span class='base-button__wrapper'>
          {this.icon ? <svg-icon name={this.icon} width={16} height={16} /> : null}
          <span class='base-button__content'>{this.$slots.default}</span>
        </span>
      </button>
    );
  }
}
