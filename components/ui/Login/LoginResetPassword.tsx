import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { required } from 'vuelidate/lib/validators';
import { IUserInterface } from 'common/types/user/user-schema';

import BaseTitle from 'components/base/BaseTitle';
import BaseFormGroup from 'components/base/BaseFormGroup';
import BaseButton from 'components/base/BaseButton';
import { serverUrls } from 'common/urls/serverUrls';

export interface ILoginResetForm {
  password: IUserInterface['password'];
  token: string;
}

@Component({
  name: 'LoginResetPassword',
  validations: {
    resetForm: {
      password: {
        required,
      },
    },
  },
})
export default class LoginResetPassword extends VueComponent<{}> {
  public resetForm: ILoginResetForm = {
    password: '',
    token: '',
  };

  public isLoading: boolean = false;

  public async onSubmit(event: Event) {
    event.preventDefault();

    const validator = this.$v;
    validator.$touch();

    if (!validator.$anyError) {
      this.isLoading = true;

      try {
        const data = this.resetForm;
        data.token = this.$route.params.token;
        await this.$axios.$post(serverUrls.auth.reset, data).then((response) => {
          if (response.success) {
            this.$notify({
              group: 'auth',
              type: 'success',
              title: 'Success',
              text: response.message,
              duration: 3000,
            });
          }
          this.isLoading = false;
        });
      } catch (error) {
        console.log(error);
        const data = error.response.data;
        this.$notify({
          group: 'auth',
          type: 'error',
          title: 'Authentication error',
          text: data.message,
          duration: 3000,
        });
        this.isLoading = false;
      }
    }
  }

  public render(): VNode {
    return (
      <div class='login__holder'>
        <div class='login__heading'>
          <BaseTitle class='login__title' level={3}>
            Reset password
          </BaseTitle>
          <p class='login__desc paragraph paragraph_color_darkgray'>Please, enter your new password</p>
        </div>
        <form class='login__form' onSubmit={this.onSubmit}>
          <div class='login__form-inputs'>
            <BaseFormGroup
              class='login__form-group'
              type='password'
              label='New password'
              id='reset-password'
              placeholder='Enter your new password'
              validator={this.$v.resetForm.password}
              onInput={($event: string) => (this.resetForm.password = $event)}
              value={this.resetForm.password}
              onBlur={this.$v.resetForm.password?.$touch}
            />
          </div>
          <BaseButton class='login__submit' type='submit' isLoading={this.isLoading}>
            Submit new password
          </BaseButton>
        </form>
      </div>
    );
  }
}
