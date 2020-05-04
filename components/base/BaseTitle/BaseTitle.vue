<template lang="pug" functional>
  component(
    v-bind='{is: `h${props.level}`}'
    :class='[`base-title_level-${props.level}`, data.staticClass, data.class]'
    ).title.base-title
    slot
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from '~/node_modules/vue-class-component';

  @Component({
    name: 'BaseTitle',
    props: {
      level: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  })
  export default class BaseTitle extends Vue {}
</script>

<style lang="sass">
  @import "BaseTitle"
</style>
