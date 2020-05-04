<template lang="pug">
  header.page-header
    .page-header__container.container
      BaseLogo
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import BaseLogo from '~/components/base/BaseLogo';

  @Component({
    name: 'TheHeader',
    components: { BaseLogo },
  })
  export default class TheHeader extends Vue {}
</script>

<style lang="sass">
  @import "TheHeader"
</style>
