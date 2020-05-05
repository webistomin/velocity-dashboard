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
  name: 'LoginSignUp',
  validations: {
    signUpForm: {
      name: {
        required,
      },
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
export default class LoginSignUp extends VueComponent<ILoginProps> {
  signUpForm = {
    name: '',
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
          <BaseTitle class='login__title' level='3'>
            <span slot='default'>Get started for free</span>
          </BaseTitle>
          <p class='login__desc paragraph paragraph_color_darkgray'>Free forever. No credit card needed.</p>
        </div>
        <form class='login__form'>
          <div class='login__form-inputs'>
            <BaseFormGroup
              class='login__form-group'
              type='text'
              label='Full name'
              id='sign-up-name'
              placeholder='Enter your full name'
              validator={this.$v.signUpForm.name}
              onInput={($event: string) => (this.signUpForm.name = $event)}
              value={this.signUpForm.name}
              onBlur={this.$v.signUpForm.name?.$touch}
            />
            <BaseFormGroup
              class='login__form-group'
              type='email'
              label='Email address'
              id='sign-up-email'
              placeholder='Enter your email'
              validator={this.$v.signUpForm.email}
              onInput={($event: string) => (this.signUpForm.email = $event)}
              value={this.signUpForm.email}
              onBlur={this.$v.signUpForm.email?.$touch}
            />
            <BaseFormGroup
              class='login__form-group'
              type='password'
              label='Password'
              id='sign-up-password'
              placeholder='Enter your password'
              validator={this.$v.signUpForm.password}
              onInput={($event: string) => (this.signUpForm.password = $event)}
              value={this.signUpForm.password}
              onBlur={this.$v.signUpForm.password?.$touch}
            />
          </div>
          <BaseButton class='login__submit' type='button'>
            Create Account
          </BaseButton>
          <p class='login__text paragraph'>
            Already have an account?
            <BaseLink class='login__changer' isButton={true} onClick={() => this.setFormType(FormTypes.SIGN_IN)}>
              Sign in
            </BaseLink>
          </p>
        </form>
      </div>
    );
  }
}
