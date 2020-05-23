import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { email, sameAs, minLength, alpha, requiredIf } from 'vuelidate/lib/validators';
import { isAfter, isBefore, subYears } from 'date-fns';

import BaseFormGroup from 'components/base/BaseFormGroup';
import { IUserSettings } from './Settings';

export interface ISettingsDataProps {
  info: IUserSettings['info'];
  onChangeSettings?: (info: IUserSettings['info']) => void;
  ref?: string;
}

@Component({
  name: 'SettingsData',
  validations: {
    settingsForm: {
      email: {
        email,
      },
      firstName: {
        alpha,
      },
      lastName: {
        alpha,
      },
      dob: {
        betweenDate: (userDob) => {
          const dob = new Date(userDob);
          /**
           * User DOB valid if he was born after 1960 and he is 18 years old at least
           */
          const isAfter1960AndBefore2005 =
            isAfter(dob, new Date('01-01-1960')) && isBefore(dob, subYears(new Date(Date.now()), 18));
          return isAfter1960AndBefore2005;
        },
        minLengthDate: minLength(10),
      },
      currentPassword: {
        required: requiredIf((settingsForm) => {
          return settingsForm.newPassword;
        }),
      },
      newPassword: {
        required: requiredIf((settingsForm) => {
          return settingsForm.confirmPassword;
        }),
      },
      confirmPassword: {
        sameAsPassword: sameAs('newPassword'),
        required: requiredIf((settingsForm) => {
          return settingsForm.newPassword;
        }),
      },
    },
  },
})
export default class SettingsData extends VueComponent<ISettingsDataProps> {
  @Prop()
  private readonly info!: IUserSettings['info'];

  public settingsForm: IUserSettings['info'] = this.info;

  @Emit('changeSettings')
  public onInput(value: string, field: keyof IUserSettings['info']): IUserSettings['info'] {
    this.settingsForm[field] = value;
    return this.settingsForm;
  }

  public touch() {
    this.$v.settingsForm.$touch();
    return this.$v;
  }

  public render(): VNode {
    return (
      <fieldset class='settings__fieldset fieldset'>
        <legend class='settings__legend legend'>
          Use this page to update your contact information and change your password.
        </legend>
        <div class='settings__inputs'>
          <div class='settings__input-row'>
            <BaseFormGroup
              class='settings__input'
              type='email'
              label='Email'
              id='settings-email'
              placeholder='Enter your email'
              validator={this.$v.settingsForm.email}
              onInput={($event: string) => this.onInput($event, 'email')}
              value={this.settingsForm.email}
              onBlur={this.$v.settingsForm.email?.$touch}
            />
          </div>
          <div class='settings__input-row'>
            <BaseFormGroup
              class='settings__input'
              type='text'
              label='First name'
              id='settings-first-name'
              placeholder='Enter your first name'
              validator={this.$v.settingsForm.firstName}
              onInput={($event: string) => this.onInput($event, 'firstName')}
              value={this.settingsForm.firstName}
              onBlur={this.$v.settingsForm.firstName?.$touch}
            />
            <BaseFormGroup
              class='settings__input'
              type='text'
              label='Last name'
              id='settings-last-name'
              placeholder='Enter your last name'
              validator={this.$v.settingsForm.lastName}
              onInput={($event: string) => this.onInput($event, 'lastName')}
              value={this.settingsForm.lastName}
              onBlur={this.$v.settingsForm.lastName?.$touch}
            />
            <BaseFormGroup
              class='settings__input'
              type='text'
              label='Birth date'
              id='settings-birth-date'
              placeholder='MM/DD/YYYY'
              validator={this.$v.settingsForm.dob}
              onInput={($event: string) => this.onInput($event, 'dob')}
              value={this.settingsForm.dob}
              onBlur={this.$v.settingsForm.dob?.$touch}
              mask='##/##/####'
            />
          </div>
          <div class='settings__input-row'>
            <BaseFormGroup
              class='settings__input'
              type='password'
              label='Current password'
              id='settings-current-password'
              placeholder='Enter current password'
              validator={this.$v.settingsForm.currentPassword}
              onInput={($event: string) => this.onInput($event, 'currentPassword')}
              value={this.settingsForm.currentPassword}
              onBlur={this.$v.settingsForm.currentPassword?.$touch}
            />
            <BaseFormGroup
              class='settings__input'
              type='text'
              label='New password'
              id='settings-new-password'
              placeholder='Enter new password'
              validator={this.$v.settingsForm.newPassword}
              onInput={($event: string) => this.onInput($event, 'newPassword')}
              value={this.settingsForm.newPassword}
              onBlur={this.$v.settingsForm.newPassword?.$touch}
            />
            <BaseFormGroup
              class='settings__input'
              type='text'
              label='Confirm'
              id='settings-confirm-password'
              placeholder='Repeat new password'
              validator={this.$v.settingsForm.confirmPassword}
              onInput={($event: string) => this.onInput($event, 'confirmPassword')}
              value={this.settingsForm.confirmPassword}
              onBlur={this.$v.settingsForm.confirmPassword?.$touch}
            />
          </div>
        </div>
      </fieldset>
    );
  }
}
