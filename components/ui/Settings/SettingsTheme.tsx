import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTheme from 'components/base/BaseTheme/BaseTheme';
import { IUserSettings } from 'components/ui/Settings/Settings';
import { SiteThemes } from 'common/types/theme/site-themes';

export interface ISettingsThemeProps {
  theme: IUserSettings['theme'];
  onThemeSelect?: (theme: IUserSettings['theme']) => void;
}

@Component({
  name: 'SettingsTheme',
})
export default class SettingsTheme extends VueComponent<ISettingsThemeProps> {
  @Prop()
  private readonly theme!: IUserSettings['theme'];

  public currentTheme: IUserSettings['theme'] = this.theme;

  @Emit('themeSelect')
  onInput(event: Event): IUserSettings['theme'] {
    const target = event.target as HTMLInputElement;
    this.currentTheme = target.value as SiteThemes;
    return this.currentTheme;
  }

  public render(): VNode {
    return (
      <fieldset class='settings__fieldset fieldset'>
        <legend class='settings__legend legend'>Select a color scheme for you Velocity app.</legend>
        <div class='settings__theme-group'>
          <BaseTheme
            id='setting-theme-shelob'
            theme='shelob'
            value='shelob'
            label='Shelob'
            checked={this.currentTheme === 'shelob'}
            onInput={(e: Event) => this.onInput(e)}
          />
          <BaseTheme
            id='setting-theme-denethor'
            theme='denethor'
            value='denethor'
            label='Denethor'
            checked={this.currentTheme === 'denethor'}
            onInput={(e: Event) => this.onInput(e)}
          />
          <BaseTheme
            id='setting-theme-quickbeam'
            theme='quickbeam'
            value='quickbeam'
            label='Quickbeam'
            checked={this.currentTheme === 'quickbeam'}
            onInput={(e: Event) => this.onInput(e)}
          />
          <BaseTheme
            id='setting-theme-shadowfax'
            theme='shadowfax'
            value='shadowfax'
            label='Shadowfax'
            checked={this.currentTheme === 'shadowfax'}
            onInput={(e: Event) => this.onInput(e)}
          />
          <BaseTheme
            id='setting-theme-grima'
            theme='grima'
            value='grima'
            label='Grima'
            checked={this.currentTheme === 'grima'}
            onInput={(e: Event) => this.onInput(e)}
          />
        </div>
      </fieldset>
    );
  }
}
