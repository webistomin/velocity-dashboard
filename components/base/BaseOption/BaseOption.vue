<template lang="pug">
  .base-option
    input
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  const BaseOptionProps = Vue.extend({
    props: {
      type: {
        type: String,
        default: 'radio',
      },
    },
  });

  @Component({
    name: 'BaseOption',
  })
  export default class BaseOption extends BaseOptionProps {}
</script>

<style lang="sass">
  @import "BaseOption"
</style>
