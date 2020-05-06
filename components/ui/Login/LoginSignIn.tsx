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
  name: 'LoginSignIn',
  validations: {
    signInForm: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
})
export default class LoginSignIn extends VueComponent<ILoginProps> {
  signInForm = {
    email: '',
    password: '',
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
          <BaseTitle class='login__title' level={3}>
            Sign in to Velocity
          </BaseTitle>
          <p class='login__desc paragraph paragraph_color_darkgray'>Please enter your credentials to proceed.</p>
        </div>
        <form class='login__form'>
          <div class='login__form-inputs'>
            <BaseFormGroup
              class='login__form-group'
              type='email'
              label='Email address'
              id='sign-in-email'
              placeholder='Enter your email'
              validator={this.$v.signInForm.email}
              onInput={($event: string) => (this.signInForm.email = $event)}
              value={this.signInForm.email}
              onBlur={this.$v.signInForm.email?.$touch}
            />
            <BaseFormGroup
              class='login__form-group'
              type='password'
              label='Password'
              id='sign-in-password'
              placeholder='Enter your password'
              validator={this.$v.signInForm.password}
              onInput={($event: string) => (this.signInForm.password = $event)}
              value={this.signInForm.password}
              onBlur={this.$v.signInForm.password?.$touch}>
              <template slot='heading'>
                <BaseLink isButton={true} onClick={() => this.setFormType(FormTypes.FORGOT_PASSWORD)} theme='gray'>
                  Forgot password?
                </BaseLink>
              </template>
            </BaseFormGroup>
          </div>
          <BaseButton class='login__submit' type='button'>
            Sign in
          </BaseButton>
          <p class='login__text paragraph'>
            Don’t have an account?
            <BaseLink class='login__changer' isButton={true} onClick={() => this.setFormType(FormTypes.SIGN_UP)}>
              Sign up
            </BaseLink>
          </p>
        </form>
      </div>
    );
  }
}
