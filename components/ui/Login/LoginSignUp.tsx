import { VueComponent } from 'types/vue-components';
import { Component, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { email, required } from 'vuelidate/lib/validators';
// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars

import BaseTitle from 'components/base/BaseTitle';
import BaseFormGroup from 'components/base/BaseFormGroup';
import BaseButton from 'components/base/BaseButton';
import BaseLink from 'components/base/BaseLink';
import BaseOption from 'components/base/BaseOption';
import BaseIcon from 'components/base/BaseIcon';

import { FormTypes, ILoginProps } from './Login';

@Component({
  name: 'LoginSignUp',
  validations: {
    signUpForm: {
      firstName: {
        required,
      },
      lastName: {
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
  public signUpForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'Administrator',
  };

  public roles = [
    {
      name: 'Administrator',
      desc: 'Full access to all settings',
      icon: 'icon-lightning',
    },
    {
      name: 'Operator',
      desc: 'Service desk and chat permissions',
      icon: 'icon-bubble',
    },
  ];

  @Emit('setFormName')
  public setFormType(type: FormTypes): FormTypes {
    return type;
  }

  public updateRoleValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.signUpForm.role = target.value;
  }

  public render(): VNode {
    return (
      <div class='login__holder'>
        <div class='login__heading'>
          <BaseTitle class='login__title' level={3}>
            Get started for free
          </BaseTitle>
          <p class='login__desc paragraph paragraph_color_darkgray'>Free forever. No credit card needed.</p>
        </div>
        <form class='login__form'>
          <ul class='login__list list'>
            {this.roles.map((role) => {
              return (
                <li class='login__item list-item' key={role.name}>
                  <BaseOption
                    class='login__option'
                    type='radio'
                    value={role.name}
                    name='login-role'
                    id={`login-role-${role.name}`}
                    onInput={(event: Event) => this.updateRoleValue(event)}
                    checked={role.name === this.signUpForm.role}>
                    <span class='login__option-content'>
                      <BaseIcon size='s' name={role.icon} color='default' class='login__option-icon' />
                      <strong class='login__option-name'>{role.name}</strong>
                      <span class='login__option-desc paragraph paragraph_color_darkgray'>{role.desc}</span>
                    </span>
                  </BaseOption>
                </li>
              );
            })}
          </ul>
          <div class='login__form-inputs'>
            <BaseFormGroup
              class='login__form-group'
              type='text'
              label='First name'
              id='sign-up-first-name'
              placeholder='Enter your first name'
              validator={this.$v.signUpForm.firstName}
              onInput={($event: string) => (this.signUpForm.firstName = $event)}
              value={this.signUpForm.firstName}
              onBlur={this.$v.signUpForm.firstName?.$touch}
            />
            <BaseFormGroup
              class='login__form-group'
              type='text'
              label='Last name'
              id='sign-up-last-name'
              placeholder='Enter your last name'
              validator={this.$v.signUpForm.lastName}
              onInput={($event: string) => (this.signUpForm.lastName = $event)}
              value={this.signUpForm.lastName}
              onBlur={this.$v.signUpForm.lastName?.$touch}
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
