<template lang="pug">
  #app
    TheHeader
    nuxt
</template>

<script lang="ts">
  import Vue from 'vue';
  import TheHeader from 'components/partials/TheHeader';
  import { detectUserInput } from '~/plugins/detectUserInput';

  export default Vue.extend({
    components: { TheHeader },
    mounted(): void {
      detectUserInput();
    },
  });
</script>
