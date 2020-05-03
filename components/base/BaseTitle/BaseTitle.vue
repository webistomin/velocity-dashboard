<template lang="pug" functional>
  component(
    v-bind='{is: `h${props.level}`}'
    :class='[`base-title_level-${props.level}`, data.staticClass, data.class]'
    ).title.base-title
    slot
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'BaseTitle',
    props: {
      level: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  });
</script>

<style lang="sass">
  @import "BaseTitle"
</style>
