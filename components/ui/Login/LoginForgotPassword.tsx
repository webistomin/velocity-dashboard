import { VueComponent } from 'types/vue-components';
import { Component, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { email, required } from 'vuelidate/lib/validators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
import { Validation } from 'vuelidate';

import BaseTitle from 'components/base/BaseTitle';
import BaseFormGroup from 'components/base/BaseFormGroup';
import BaseButton from 'components/base/BaseButton';
import BaseLink from 'components/base/BaseLink';

import { FormTypes, ILoginProps } from './Login';

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
  forgotForm = {
    email: '',
  };

  @Emit('setFormName')
  public setFormType(type: FormTypes): FormTypes {
    return type;
  }

  render(): VNode {
    return (
      <div class='login__holder'>
        <div class='login__heading'>
          {/*
          // @ts-ignore */}
          <BaseTitle class='login__title' level='3'>
            <span slot='default'>Recover password</span>
          </BaseTitle>
          <p class='login__desc paragraph paragraph_color_darkgray'>Don't worry, happens to the best of us.</p>
        </div>
        <form class='login__form'>
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
          <BaseButton class='login__submit' type='button'>
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
