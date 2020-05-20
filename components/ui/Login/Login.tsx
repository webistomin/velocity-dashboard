import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import { VueComponent } from 'types/vue-components';

import LoginSignIn from './LoginSignIn';
import LoginSignUp from './LoginSignUp';
import LoginForgotPassword from './LoginForgotPassword';
import LoginVideo from './LoginVideo';
import LoginHeader from './LoginHeader';

import './Login.sass';

export enum FormTypes {
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  FORGOT_PASSWORD = 'forgot-password',
}

export interface ILoginProps {
  onSetFormName: (type: FormTypes) => void;
}

@Component({
  name: 'Login',
})
export default class Login extends VueComponent {
  public currentForm = FormTypes.SIGN_IN;

  public setFormType(formName: FormTypes): void {
    this.currentForm = formName;
  }

  public render(): VNode {
    return (
      <section class='login'>
        <h2 class='visually-hidden'>Authorization</h2>
        <div class='login__container container'>
          <div class='login__inner'>
            <div class='login__col login__col_left'>
              <LoginHeader />
              <transition name='login-fade' mode='out-in'>
                {this.currentForm === FormTypes.SIGN_IN && (
                  <LoginSignIn onSetFormName={(formName) => this.setFormType(formName)} />
                )}
                {this.currentForm === FormTypes.SIGN_UP && (
                  <LoginSignUp onSetFormName={(formName) => this.setFormType(formName)} />
                )}
                {this.currentForm === FormTypes.FORGOT_PASSWORD && (
                  <LoginForgotPassword onSetFormName={(formName) => this.setFormType(formName)} />
                )}
              </transition>
            </div>
            <div class='login__col login__col_right'>
              <LoginVideo />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
