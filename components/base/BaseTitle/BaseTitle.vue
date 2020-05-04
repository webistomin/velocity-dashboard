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

  const BaseTitleProps = Vue.extend({
    props: {
      level: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  });

  @Component({
    name: 'BaseTitle',
  })
  export default class BaseTitle extends BaseTitleProps {}
</script>

<style lang="sass">
  @import "BaseTitle"
</style>
