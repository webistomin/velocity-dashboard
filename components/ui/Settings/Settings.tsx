import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseTitle from 'components/base/BaseTitle';
import BaseBlock from 'components/base/BaseBlock';
import SettingsData from './SettingsData';
import SettingsNotifications from './SettingsNotifications';
import SettingsTheme from './SettingsTheme';

import './Settings.sass';

export interface IUserSettings {
  info: {
    email: string;
    firstName: string;
    lastName: string;
    dob: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  notifications: {
    isEmailNotificationsEnabled: boolean;
    isPushNotificationsEnabled: boolean;
    isMonthlyNotificationsEnabled: boolean;
    isQuarterNotificationsEnabled: boolean;
  };
  theme: string;
}

@Component({
  name: 'Settings',
})
export default class Settings extends VueComponent {
  settingsForm: IUserSettings = {
    info: {
      email: 'webistomin@gmail.com',
      firstName: 'Alexey',
      lastName: 'Istomin',
      dob: '',
      currentPassword: '123',
      newPassword: '',
      confirmPassword: '',
    },
    notifications: {
      isEmailNotificationsEnabled: true,
      isPushNotificationsEnabled: false,
      isMonthlyNotificationsEnabled: false,
      isQuarterNotificationsEnabled: false,
    },
    theme: 'shelob',
  };

  onChangeSettings(info: IUserSettings['info']): void {
    this.settingsForm.info = info;
  }

  onSelectNotification(notifications: IUserSettings['notifications']): void {
    this.settingsForm.notifications = notifications;
  }

  onThemeSelect(theme: string): void {
    this.settingsForm.theme = theme;
    const root = document.documentElement;
    root.className = `theme theme_${theme}`;
    localStorage.setItem('theme', theme);
  }

  public render(): VNode {
    return (
      <section class='settings'>
        <div class='container settings__container'>
          {/*
          // @ts-ignore */}
          <BaseTitle class='settings__title' level={3}>
            Settings
          </BaseTitle>
          <form class='settings__grid'>
            <BaseBlock title='Personal Data'>
              <SettingsData onChangeSettings={this.onChangeSettings} info={this.settingsForm.info} />
            </BaseBlock>
            <BaseBlock title='Notifications'>
              <SettingsNotifications
                onSelectNotification={this.onSelectNotification}
                notifications={this.settingsForm.notifications}
              />
            </BaseBlock>
            <BaseBlock title='Theme'>
              <SettingsTheme onThemeSelect={this.onThemeSelect} theme={this.settingsForm.theme} />
            </BaseBlock>
          </form>
        </div>
      </section>
    );
  }
}
