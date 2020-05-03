<template lang="pug">
  #app
    TheHeader
    nuxt
</template>

<script lang="ts">
  import Vue from 'vue';
  import TheHeader from 'components/partials/TheHeader';

  export default Vue.extend({
    components: { TheHeader },
  });
</script>
