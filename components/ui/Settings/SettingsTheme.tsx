import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTheme from 'components/base/BaseTheme/BaseTheme';

@Component({
  name: 'SettingsTheme',
})
export default class SettingsTheme extends VueComponent {
  render(): VNode {
    return (
      <fieldset class='settings__fieldset fieldset'>
        <legend class='settings__legend legend'>Select a color scheme for you Velocity app.</legend>
        <div class='settings__theme-group'>
          <BaseTheme id='setting-theme-shelob' theme='shelob' value='shelob' label='Shelob' />
          <BaseTheme id='setting-theme-denethor' theme='denethor' value='denethor' label='Denethor' />
          <BaseTheme id='setting-theme-quickbeam' theme='quickbeam' value='quickbeam' label='Quickbeam' />
          <BaseTheme id='setting-theme-shadowfax' theme='shadowfax' value='shadowfax' label='Shadowfax' />
          <BaseTheme id='setting-theme-grima' theme='grima' value='grima' label='Grima' />
        </div>
      </fieldset>
    );
  }
}
