<template lang="pug">
  .login__holder
    .login__heading
      BaseTitle(:level='3').login__title Recover password
      p.login__desc.paragraph.paragraph_color_darkgray Don't worry, happens to the best of us.
    form.login__form
      .login__form-inputs
        BaseFormGroup(
          :type='"email"'
          :label='"Email address"'
          :id='"forgot-email"'
          :placeholder='"Enter your email"'
          :validator='$v.forgotForm.email'
          @input='forgotForm.email = $event'
          :value='forgotForm.email'
          @blur='$v.forgotForm.email.$touch()'
        ).login__form-group
      BaseButton(
        :type='"submit"'
      ).login__submit Reset my password
      p.login__text.paragraph Back to
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
  import { FormTypes } from 'components/ui/Login/Login.vue';

  @Component({
    name: 'LoginForgot',
    components: { BaseFormGroup, BaseButton, BaseLink },
    validations: {
      forgotForm: {
        email: {
          required,
          email,
        },
      },
    },
  })
  export default class LoginForgot extends Vue {
    FormTypes: any = FormTypes;

    public data() {
      return {
        forgotForm: {
          email: '',
        },
      };
    }

    public setFormType(type: FormTypes): void {
      this.$emit('setFormName', type);
    }
  }
</script>
