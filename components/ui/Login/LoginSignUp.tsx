import { VNode } from 'vue';
import { VueComponent } from 'types/vue-components';
import { Component, Emit } from 'nuxt-property-decorator';
import { email, required } from 'vuelidate/lib/validators';
import { IUserInterface } from 'common/types/user/user-schema';
import { UserRoles } from 'common/types/user/user-roles';
import { serverUrls } from 'common/urls/serverUrls';
import { IAuthSignUpResponseBody, IAuthSignUpValidatorResponseBody } from 'common/types/auth/sign-up';

import BaseTitle from 'components/base/BaseTitle';
import BaseFormGroup from 'components/base/BaseFormGroup';
import BaseButton from 'components/base/BaseButton';
import BaseLink from 'components/base/BaseLink';
import BaseOption from 'components/base/BaseOption';
import BaseIcon from 'components/base/BaseIcon';
import { FormTypes, ILoginProps } from './Login';

export interface ILoginSignUpForm {
  firstName: IUserInterface['firstName'];
  lastName: IUserInterface['lastName'];
  email: IUserInterface['email'];
  password: IUserInterface['password'];
  role: IUserInterface['role'];
}

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
  public signUpForm: ILoginSignUpForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: UserRoles.OPERATOR,
  };

  public isLoading: boolean = false;

  public roles = [
    {
      name: 'Administrator',
      value: UserRoles.ADMIN,
      desc: 'Full access to all settings',
      icon: 'icon-lightning',
    },
    {
      name: 'Operator',
      value: UserRoles.OPERATOR,
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
    this.signUpForm.role = target.value as UserRoles;
  }

  public async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    const validator = this.$v;

    validator.$touch();

    if (!validator.$anyError) {
      this.isLoading = true;

      try {
        const data = this.signUpForm;
        await this.$axios
          .$post(serverUrls.auth.signUp, data)
          .then(async (response: IAuthSignUpResponseBody | IAuthSignUpValidatorResponseBody) => {
            if (response.success) {
              await this.$auth.loginWith('local', {
                data: {
                  email: data.email,
                  password: data.password,
                },
              });
            }
            this.isLoading = false;
          });
      } catch (e) {
        const data: IAuthSignUpResponseBody | IAuthSignUpValidatorResponseBody = e.response.data;
        this.isLoading = false;
        this.$notify({
          group: 'auth',
          type: 'error',
          title: 'Authentication error',
          text: data?.message,
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
            Get started for free
          </BaseTitle>
          <p class='login__desc paragraph paragraph_color_darkgray'>Free forever. No credit card needed.</p>
        </div>
        <form class='login__form' onSubmit={this.onSubmit}>
          <ul class='login__list list'>
            {this.roles.map((role) => {
              return (
                <li class='login__item list-item' key={role.name}>
                  <BaseOption
                    class='login__option'
                    type='radio'
                    value={role.value}
                    name='login-role'
                    id={`login-role-${role.value}`}
                    onInput={(event: Event) => this.updateRoleValue(event)}
                    checked={role.value === this.signUpForm.role}>
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
          <BaseButton class='login__submit' type='submit' isLoading={this.isLoading}>
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
