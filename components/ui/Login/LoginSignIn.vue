<template lang="pug">
  .login__holder
    .login__heading
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
          template(v-slot:heading)
            BaseLink(
              :isButton='true'
              @click='setFormType(FormTypes.FORGOT_PASSWORD)'
              theme='gray'
              ) Forgot password?
      BaseButton(
        :type='"submit"'
      ).login__submit Sign in
      p.login__text.paragraph Don’t have an account?
        BaseLink(
          :isButton='true'
          @click='setFormType(FormTypes.SIGN_UP)'
          ).login__changer Sign up
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  // @ts-ignore
  import { email, required } from 'vuelidate/lib/validators';
  import BaseTitle from 'components/base/BaseTitle';
  import BaseFormGroup from 'components/base/BaseFormGroup';
  import BaseButton from 'components/base/BaseButton';
  import BaseLink from 'components/base/BaseLink';
  import { FormTypes } from './Login.vue';

  @Component({
    name: 'LoginSignIn',
    components: { BaseTitle, BaseFormGroup, BaseButton, BaseLink },
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
  export default class LoginSignIn extends Vue {
    FormTypes: any = FormTypes;

    public data() {
      return {
        signInForm: {
          email: '',
          password: '',
        },
      };
    }

    public setFormType(type: FormTypes): void {
      this.$emit('setFormName', type);
    }
  }
</script>
