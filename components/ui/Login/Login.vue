<template lang="pug">
  section.login
    .login__container.container
      .login__inner
        .login__col.login__col_left
          BaseTitle(:level='3').login__title Sign in to Velocity
          p.login__desc.paragraph.paragraph_color_darkgray Please enter your credentials to proceed.
          form.login__form
            .login__form-inputs
              BaseFormGroup(
                :type='"email"'
                :label='"Email address"'
                :id='"sign-in-email"'
                :placeholder='"Enter your email"'
                :validator='$v.signInForm.email'
                @input='signInForm.email = $event'
                :value='signInForm.email'
                @blur='$v.signInForm.email.$touch()'
              ).login__form-group
              BaseFormGroup(
                :type='"password"'
                :label='"Password"'
                :id='"sign-in-password"'
                :placeholder='"Enter your password"'
                :validator='$v.signInForm.password'
                @input='signInForm.password = $event'
                :value='signInForm.password'
                @blur='$v.signInForm.password.$touch()'
              ).login__form-group
            BaseButton(
              :type='"submit"'
            ) Sign in
        .login__col.login__col_right
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  // @ts-ignore
  import { email, required } from 'vuelidate/lib/validators';
  import BaseTitle from 'components/base/BaseTitle';
  import BaseFormGroup from 'components/base/BaseFormGroup';
  import BaseButton from 'components/base/BaseButton';

  @Component({
    name: 'Login',
    components: { BaseTitle, BaseFormGroup, BaseButton },
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
  export default class Login extends Vue {
    public data() {
      return {
        signInForm: {
          email: '',
          password: '',
        },
      };
    }
  }
</script>

<style lang="sass">
  @import "Login"
</style>
