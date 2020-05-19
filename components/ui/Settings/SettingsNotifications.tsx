import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseSwitch from 'components/base/BaseSwitch';
import { IUserSettings } from 'components/ui/Settings/Settings';

export interface ISettingsNotificationsProps {
  notifications: IUserSettings['notifications'];
  onSelectNotification?: (notifications: IUserSettings['notifications']) => void;
}

@Component({
  name: 'SettingsNotifications',
})
export default class SettingNotification extends VueComponent<ISettingsNotificationsProps> {
  @Prop()
  private readonly notifications!: IUserSettings['notifications'];

  public settingsForm: IUserSettings['notifications'] = this.notifications;

  @Emit('selectNotification')
  onInput(event: Event, field: keyof IUserSettings['notifications']): IUserSettings['notifications'] {
    const target = event.target as HTMLInputElement;
    this.settingsForm[field] = target.checked;
    return this.settingsForm;
  }

  public render(): VNode {
    return (
      <fieldset class='settings__fieldset fieldset'>
        <legend class='settings__legend legend'>Control your notification and auto-follow settings.</legend>
        <div class='settings__toggles'>
          <div class='settings__toggle-group'>
            <BaseSwitch
              label='Email Notification'
              text='Commits data and history'
              id='settings-email-notification'
              checked={this.settingsForm.isEmailNotificationsEnabled}
              onInput={(e: Event) => this.onInput(e, 'isEmailNotificationsEnabled')}
            />
            <BaseSwitch
              label='Push Notification'
              text='Commits data and history'
              id='settings-push-notification'
              checked={this.settingsForm.isPushNotificationsEnabled}
              onInput={(e: Event) => this.onInput(e, 'isPushNotificationsEnabled')}
            />
          </div>
          <div class='settings__toggle-group'>
            <BaseSwitch
              label='Monthly Reports'
              text='Commits data and history'
              id='settings-monthly-notification'
              checked={this.settingsForm.isMonthlyNotificationsEnabled}
              onInput={(e: Event) => this.onInput(e, 'isMonthlyNotificationsEnabled')}
            />
            <BaseSwitch
              label='Quarter Reports'
              text='Commits data and history'
              id='settings-quarter-notification'
              checked={this.settingsForm.isQuarterNotificationsEnabled}
              onInput={(e: Event) => this.onInput(e, 'isQuarterNotificationsEnabled')}
            />
          </div>
        </div>
      </fieldset>
    );
  }
}
