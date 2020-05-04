<template lang="pug">
  section.login
    .login__container.container
      .login__inner
        .login__col.login__col_left
          transition(name='login-fade' mode='out-in')
            LoginSignIn(
              @setFormName='setFormType'
              v-if='currentForm === FormTypes.SIGN_IN'
              )
            LoginSignUp(
              @setFormName='setFormType'
              v-if='currentForm === FormTypes.SIGN_UP'
              )
            LoginForgotPassword(
              @setFormName='setFormType'
              v-if='currentForm === FormTypes.FORGOT_PASSWORD'
              )
        .login__col.login__col_right
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import LoginSignIn from './LoginSignIn.vue';
  import LoginSignUp from './LoginSignUp.vue';
  import LoginForgotPassword from './LoginForgotPassword.vue';

  export enum FormTypes {
    SIGN_IN = 'sign-in',
    SIGN_UP = 'sign-up',
    FORGOT_PASSWORD = 'forgot-password',
  }

  @Component({
    name: 'Login',
    components: { LoginForgotPassword, LoginSignIn, LoginSignUp },
  })
  export default class Login extends Vue {
    FormTypes: any = FormTypes;

    public data() {
      return {
        currentForm: FormTypes.SIGN_IN,
      };
    }

    public setFormType(formName: FormTypes): void {
      this.currentForm = formName;
    }
  }
</script>

<style lang="sass">
  @import "Login"
</style>
