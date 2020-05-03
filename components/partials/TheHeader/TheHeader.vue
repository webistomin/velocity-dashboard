<template lang="pug">
  header.page-header
    AppLogo
</template>

<script lang="ts">
  import Vue from 'vue';
  import AppLogo from '~/components/base/AppLogo';

  export default Vue.extend({
    name: 'TheHeader',
    components: { AppLogo },
  });
</script>

<style lang="sass">
  @import "TheHeader"
</style>
