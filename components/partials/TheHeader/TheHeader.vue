<template lang="pug">
  header.page-header
    .page-header__container.container
      BaseLogo
</template>

<script lang="ts">
  import Vue from 'vue';
  import BaseLogo from '~/components/base/BaseLogo';

  export default Vue.extend({
    name: 'TheHeader',
    components: { BaseLogo },
  });
</script>

<style lang="sass">
  @import "TheHeader"
</style>
