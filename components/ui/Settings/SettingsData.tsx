import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { email, sameAs } from 'vuelidate/lib/validators';

import BaseFormGroup from 'components/base/BaseFormGroup';
import BaseButton from 'components/base/BaseButton';

@Component({
  name: 'SettingsData',
  validations: {
    settingsForm: {
      email: {
        email,
      },
      firstName: {},
      lastName: {},
      dob: {},
      currentPassword: {},
      newPassword: {},
      confirmPassword: {
        sameAsPassword: sameAs('newPassword'),
      },
    },
  },
})
export default class SettingsData extends VueComponent {
  settingsForm = {
    email: '',
    firstName: '',
    lastName: '',
    dob: '',
    currentPassword: '123',
    newPassword: '',
    confirmPassword: '',
  };

  render(): VNode {
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
              onInput={($event: string) => (this.settingsForm.email = $event)}
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
              onInput={($event: string) => (this.settingsForm.firstName = $event)}
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
              onInput={($event: string) => (this.settingsForm.lastName = $event)}
              value={this.settingsForm.lastName}
              onBlur={this.$v.settingsForm.lastName?.$touch}
            />
            <BaseFormGroup
              class='settings__input'
              type='text'
              label='Birth date'
              id='settings-birth-date'
              placeholder='DD/MM/YYYY'
              validator={this.$v.settingsForm.dob}
              onInput={($event: string) => (this.settingsForm.dob = $event)}
              value={this.settingsForm.dob}
              onBlur={this.$v.settingsForm.dob?.$touch}
            />
          </div>
          <div class='settings__input-row'>
            <BaseFormGroup
              class='settings__input'
              type='password'
              label='Current password'
              id='settings-current-password'
              placeholder=''
              validator={this.$v.settingsForm.currentPassword}
              onInput={($event: string) => (this.settingsForm.currentPassword = $event)}
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
              onInput={($event: string) => (this.settingsForm.newPassword = $event)}
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
              onInput={($event: string) => (this.settingsForm.confirmPassword = $event)}
              value={this.settingsForm.confirmPassword}
              onBlur={this.$v.settingsForm.confirmPassword?.$touch}
            />
          </div>
        </div>
        <BaseButton class='settings__submit' type='submit'>
          Save changes
        </BaseButton>
      </fieldset>
    );
  }
}
