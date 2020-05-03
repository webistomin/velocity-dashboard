<template lang="pug" functional>
  .base-logo
    nuxt-link(to='/').base-logo__link.link
      svg(xmlns='http://www.w3.org/2000/svg' width='21.136' height='23.774').base-logo__icon
        path(d='M14 0v9.333a14 14 0 01-14 14V14A14 14 0 0114 0z' fill='#2cc2a5')
        path(d='M21.136 5.788l-3.192 8.77A14 14 0 010 22.926l3.192-8.77a14 14 0 0117.944-8.368z' fill='#2e5bff')
      h1.base-logo__title.title velocity
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    name: 'BaseLogo',
  });
</script>

<style lang="sass">
  @import 'BaseLogo'
</style>
