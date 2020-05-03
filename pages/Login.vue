<template lang="pug">
  main.page-content
    Login
</template>

<script lang="ts">
  import Vue from 'vue';
  import Login from 'components/ui/Login';

  export default Vue.extend({
    name: 'LoginPage',
    components: { Login },
  });
</script>
