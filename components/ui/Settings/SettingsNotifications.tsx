import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseSwitch from 'components/base/BaseSwitch';

@Component({
  name: 'SettingsNotifications',
})
export default class SettingNotification extends VueComponent {
  render(): VNode {
    return (
      <fieldset class='settings__fieldset fieldset'>
        <legend class='settings__legend legend'>Control your notification and auto-follow settings.</legend>
        <div class='settings__toggles'>
          <div class='settings__toggle-group'>
            <BaseSwitch
              label='Email Notification'
              text='Commits data and history'
              value={true}
              id='settings-email-notification'
            />
            <BaseSwitch
              label='Push Notification'
              text='Commits data and history'
              value={true}
              id='settings-push-notification'
            />
          </div>
          <div class='settings__toggle-group'>
            <BaseSwitch
              label='Monthly Reports'
              text='Commits data and history'
              value={true}
              id='settings-monthly-notification'
            />
            <BaseSwitch
              label='Quarter Reports'
              text='Commits data and history'
              value={true}
              id='settings-quarter-notification'
            />
          </div>
        </div>
      </fieldset>
    );
  }
}
