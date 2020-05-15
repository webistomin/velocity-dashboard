import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseTheme.sass';
import { Emit } from '~/node_modules/nuxt-property-decorator';

export type IBaseThemes = 'shelob' | 'denethor' | 'quickbeam' | 'shadowfax' | 'grima';

export interface IBaseThemeProps {
  value: string;
  id: string;
  label: string;
  theme: IBaseThemes;
  checked?: boolean;
  onInput?: (event: Event) => void;
}

@Component({
  name: 'BaseTheme',
})
export default class BaseTheme extends VueComponent<IBaseThemeProps> {
  @Prop()
  private readonly value!: IBaseThemeProps['value'];

  @Prop()
  private readonly id!: IBaseThemeProps['id'];

  @Prop()
  private readonly label!: IBaseThemeProps['label'];

  @Prop()
  private readonly theme!: IBaseThemeProps['theme'];

  @Prop()
  private readonly checked!: IBaseThemeProps['checked'];

  @Emit('input')
  onInput(event: Event): Event {
    return event;
  }

  public render(): VNode {
    return (
      <div class='base-theme'>
        <input
          class='base-theme__radio visually-hidden'
          type='radio'
          name='theme-selection'
          id={this.id}
          value={this.value}
          onInput={this.onInput}
          checked={this.checked}
        />
        <label for={this.id} class='base-theme__label label'>
          <span class={`base-theme__theme base-theme__theme_${this.theme}`} />
          <span class='base-theme__text'>{this.label}</span>
        </label>
      </div>
    );
  }
}
