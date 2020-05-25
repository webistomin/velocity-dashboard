import { VueComponent } from 'types/vue-components';
import { Component, Watch } from 'nuxt-property-decorator';
import Vue, { VNode } from 'vue';
import { State } from 'vuex-class';

import BaseTitle from 'components/base/BaseTitle';
import BaseBlock from 'components/base/BaseBlock';
import { IProfileUpdateResponseBody } from 'common/types/profile/update';
import { IUserInterface, IUserInterfaceDB } from 'common/types/user/user-schema';
import { SiteThemes } from 'common/types/theme/site-themes';
import BaseButton from 'components/base/BaseButton';
import { serverUrls } from 'common/urls/serverUrls';
import SettingsData from './SettingsData';
import SettingsNotifications from './SettingsNotifications';
import SettingsTheme from './SettingsTheme';

import './Settings.sass';

export interface IUserSettings {
  info: {
    email: IUserInterface['email'];
    firstName: IUserInterface['firstName'];
    lastName: IUserInterface['lastName'];
    dob: IUserInterface['dob'];
    currentPassword: IUserInterface['password'];
    newPassword: IUserInterface['password'];
    confirmPassword: IUserInterface['password'];
    bio: IUserInterface['bio'];
    location: IUserInterface['location'];
  };
  notifications: {
    isEmailNotificationsEnabled: IUserInterface['notifications']['isEmailNotificationsEnabled'];
    isPushNotificationsEnabled: IUserInterface['notifications']['isPushNotificationsEnabled'];
    isMonthlyNotificationsEnabled: IUserInterface['notifications']['isMonthlyNotificationsEnabled'];
    isQuarterNotificationsEnabled: IUserInterface['notifications']['isQuarterNotificationsEnabled'];
  };
  theme: IUserInterface['theme'];
}

@Component({
  name: 'Settings',
})
export default class Settings extends VueComponent {
  public $refs!: Vue['$refs'] & {
    settingsDataForm: SettingsData;
  };

  public isLoading: boolean = false;

  public settingsForm: IUserSettings = {
    info: {
      email: '',
      firstName: '',
      lastName: '',
      dob: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      bio: '',
      location: '',
    },
    notifications: {
      isEmailNotificationsEnabled: false,
      isPushNotificationsEnabled: false,
      isMonthlyNotificationsEnabled: false,
      isQuarterNotificationsEnabled: false,
    },
    theme: SiteThemes.SHELOB,
  };

  @State((state) => state.auth.user)
  getAuthUser!: IUserInterfaceDB;

  created(): void {
    const authUser = this.getAuthUser;

    const userInfo = this.settingsForm.info;
    const userNotification = this.settingsForm.notifications;

    userInfo.email = authUser.email;
    userInfo.firstName = authUser.firstName;
    userInfo.lastName = authUser.lastName;
    userInfo.dob = authUser.dob;
    userInfo.bio = authUser.bio;

    const notificationsKeys = Object.keys(userNotification) as Array<keyof IUserInterface['notifications']>;
    notificationsKeys.forEach((field) => {
      userNotification[field] = authUser.notifications[field];
    });

    this.settingsForm.theme = authUser.theme;
  }

  public onChangeSettings(info: IUserSettings['info']): void {
    this.settingsForm.info = info;
  }

  public onSelectNotification(notifications: IUserSettings['notifications']): void {
    this.settingsForm.notifications = notifications;
  }

  public onThemeSelect(theme: SiteThemes): void {
    this.settingsForm.theme = theme;
    const root = document.documentElement;
    root.className = `theme theme_${theme}`;
  }

  public async onSubmit(event: Event) {
    event.preventDefault();

    const validateState = this.$refs.settingsDataForm.touch();
    if (validateState.$anyError) {
      /**
       * Scroll to first error
       */
      await this.$nextTick();
      const firstError = document.querySelector('[id^=errors-settings]');
      if (firstError) {
        firstError.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    } else {
      try {
        this.isLoading = true;
        const data = this.settingsForm;
        const response: IProfileUpdateResponseBody = await this.$axios.$post(serverUrls.profile.update, data);

        if (response.success) {
          localStorage.setItem('theme', data.theme);

          if (response.token) {
            await this.$auth.setUserToken(response.token);
          } else {
            await this.$auth.fetchUser();
          }

          this.$notify({
            group: 'settings',
            type: 'success',
            title: 'Update successful',
            text: response.message,
            duration: 3000,
          });
        }

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        const response: IProfileUpdateResponseBody = error.response.data;
        this.$notify({
          group: 'settings',
          type: 'error',
          title: 'Error during update',
          text: response.message,
          duration: 3000,
        });
      }
    }
  }

  public beforeDestroy(): void {
    const theme = this.getAuthUser.theme;
    this.onThemeSelect(theme);
  }

  public render(): VNode {
    return (
      <section class='settings'>
        <div class='container settings__container'>
          <BaseTitle class='settings__title' level={3}>
            Settings
          </BaseTitle>
          <form class='settings__grid' onSubmit={this.onSubmit}>
            <BaseBlock title='Personal Data'>
              <SettingsData
                onChangeSettings={this.onChangeSettings}
                info={this.settingsForm.info}
                ref='settingsDataForm'
              />
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
            <BaseButton class='settings__submit' type='submit' isLoading={this.isLoading}>
              Save changes
            </BaseButton>
            <pre>{JSON.stringify(this.$v)}</pre>
          </form>
        </div>
      </section>
    );
  }
}
