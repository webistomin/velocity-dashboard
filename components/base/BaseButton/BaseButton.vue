<template lang="pug">
  button(
    :type='type'
    :disabled='isDisabled'
    :class='getClassnames'
    @click='onClick'
  ).base-button.btn
    span.base-button__wrapper
      SvgIcon(
        v-if='icon'
        name='icon'
        :width='16'
        :height='16'
      ).base-button__icon
      slot.base-button__content
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  const BaseButtonProps = Vue.extend({
    props: {
      type: {
        type: String,
        default: 'button',
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },
      isLoading: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: '',
      },
      theme: {
        type: String,
        default: 'default',
      },
    },
  });

  @Component({
    name: 'BaseButton',
  })
  export default class BaseButton extends BaseButtonProps {
    public onClick(): void {
      this.$emit('click');
    }

    public get getClassnames(): string[] {
      const result = [`base-button_theme_${this.theme}`];

      if (this.isDisabled) {
        result.push('base-button_disabled');
      }

      if (this.isLoading) {
        result.push('base-button_loading');
      }

      return result;
    }
  }
</script>

<style lang="sass">
  @import "BaseButton"
</style>
