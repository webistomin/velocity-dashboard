import { VueComponent } from 'types/vue-components';
import { Component, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { email, required } from 'vuelidate/lib/validators';
import { IUserInterface } from 'common/types/user/user-schema';
import { serverUrls } from 'common/urls/serverUrls';
import { IAuthResetResponseBody } from 'common/types/auth/reset';

import BaseTitle from 'components/base/BaseTitle';
import BaseFormGroup from 'components/base/BaseFormGroup';
import BaseButton from 'components/base/BaseButton';
import BaseLink from 'components/base/BaseLink';
import { FormTypes, ILoginProps } from './Login';

export interface ILoginForgotForm {
  email: IUserInterface['email'];
}

@Component({
  name: 'LoginForgot',
  validations: {
    forgotForm: {
      email: {
        required,
        email,
      },
    },
  },
})
export default class LoginForgot extends VueComponent<ILoginProps> {
  public forgotForm: ILoginForgotForm = {
    email: '',
  };

  public isLoading: boolean = false;

  @Emit('setFormName')
  public setFormType(type: FormTypes): FormTypes {
    return type;
  }

  public async onSubmit(event: Event) {
    event.preventDefault();

    const validator = this.$v;
    validator.$touch();

    if (!validator.$anyError) {
      this.isLoading = true;

      try {
        const data = this.forgotForm;
        await this.$axios.$post(serverUrls.auth.reset, data).then((response: IAuthResetResponseBody) => {
          this.isLoading = false;
          if (response.success) {
            this.$notify({
              group: 'auth',
              type: 'success',
              title: 'Success',
              text: 'Link was sent to your email',
              duration: 3000,
            });
          }
        });
      } catch (e) {
        this.isLoading = false;
        this.$notify({
          group: 'auth',
          type: 'error',
          title: 'Authentication error',
          text: e?.response?.data?.message,
          duration: 3000,
        });
      }
    }
  }

  public render(): VNode {
    return (
      <div class='login__holder'>
        <div class='login__heading'>
          <BaseTitle class='login__title' level={3}>
            Recover password
          </BaseTitle>
          <p class='login__desc paragraph paragraph_color_darkgray'>Don't worry, happens to the best of us.</p>
        </div>
        <form class='login__form' onSubmit={this.onSubmit}>
          <div class='login__form-inputs'>
            <BaseFormGroup
              class='login__form-group'
              type='email'
              label='Email address'
              id='forgot-email'
              placeholder='Enter your email'
              validator={this.$v.forgotForm.email}
              onInput={($event: string) => (this.forgotForm.email = $event)}
              value={this.forgotForm.email}
              onBlur={this.$v.forgotForm.email?.$touch}
            />
          </div>
          <BaseButton class='login__submit' type='submit' isLoading={this.isLoading}>
            Reset my password
          </BaseButton>
          <p class='login__text paragraph'>
            Back to
            <BaseLink class='login__changer' isButton={true} onClick={() => this.setFormType(FormTypes.SIGN_IN)}>
              Sign in
            </BaseLink>
          </p>
        </form>
      </div>
    );
  }
}
