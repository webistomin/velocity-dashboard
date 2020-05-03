<template lang="pug">
  section.login
    .login__container.container
      .login__inner
        .login__col.login__col_left
          BaseTitle(:level='1').login__title Sign in to Velocity
          p.login__desc.paragraph Please enter your credentials to proceed.
        .login__col.login__col_right
</template>

<script lang="ts">
  import Vue from 'vue';
  import BaseTitle from 'components/base/BaseTitle';

  export default Vue.extend({
    name: 'Login',
    components: { BaseTitle },
  });
</script>

<style lang="sass">
  @import "Login"
</style>
