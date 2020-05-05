<template lang="pug">
  .login__holder
    .login__heading
      BaseTitle(:level='3').login__title Get started for free
      p.login__desc.paragraph.paragraph_color_darkgray Free forever. No credit card needed.
    form.login__form
      .login__form-inputs
        BaseFormGroup(
          :type='"text"'
          :label='"Full name"'
          :id='"sign-up-name"'
          :placeholder='"Enter your full name"'
          :validator='$v.signUpForm.name'
          @input='signUpForm.name = $event'
          :value='signUpForm.name'
          @blur='$v.signUpForm.name.$touch()'
        ).login__form-group
        BaseFormGroup(
          :type='"email"'
          :label='"Email address"'
          :id='"sign-up-email"'
          :placeholder='"Enter your email"'
          :validator='$v.signUpForm.email'
          @input='signUpForm.email = $event'
          :value='signUpForm.email'
          @blur='$v.signUpForm.email.$touch()'
        ).login__form-group
        BaseFormGroup(
          :type='"password"'
          :label='"Password"'
          :id='"sign-up-password"'
          :placeholder='"Enter your password"'
          :validator='$v.signUpForm.password'
          @input='signUpForm.password = $event'
          :value='signUpForm.password'
          @blur='$v.signUpForm.password.$touch()'
        ).login__form-group
      BaseButton(
        :type='"submit"'
      ).login__submit Create Account
      p.login__text.paragraph Already have an account?
        BaseLink(
          :isButton='true'
          @click='setFormType(FormTypes.SIGN_IN)'
          ).login__changer Sign in
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  // @ts-ignore
  import { email, required } from 'vuelidate/lib/validators';
  import BaseFormGroup from 'components/base/BaseFormGroup';
  import BaseButton from 'components/base/BaseButton';
  import BaseLink from 'components/base/BaseLink';
  import { FormTypes } from './Login.vue';

  @Component({
    name: 'LoginSignUp',
    components: { BaseFormGroup, BaseButton, BaseLink },
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
  export default class LoginSignUp extends Vue {
    FormTypes: any = FormTypes;

    public data() {
      return {
        signUpForm: {
          name: '',
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
