<template lang="pug">
  .base-form-group
    .base-form-group__heading
      label(
        v-if='label'
        :for='id'
      ).base-form-group__label.caption {{ label }}
      slot(name='heading')
    .base-form-group__content
      input(
        :type='type'
        :id='id'
        :aria-label='label'
        :name='name'
        @input='onInput($event)'
        @blur='onBlur'
        :value='value'
        :aria-describedby='`errors-${id}`'
        :autocomplete='autocomplete'
        :placeholder='placeholder'
        :class='{"base-form-group__input_invalid" : isInputInvalid}'
      ).base-form-group__input
      ul.base-form-group__errors.list(
        :id='`errors-${id}`'
        v-if='isInputInvalid'
        )
        li(
          v-for='(error, index) in activeErrorMessages'
          :key='`${error}-${index}`'
        ).base-form-group__error.list-item {{ error }}

</template>

<script lang="ts">
  import Vue from 'vue';
  // @ts-ignore
  import { singleErrorExtractorMixin } from 'vuelidate-error-extractor';

  export default Vue.extend({
    name: 'BaseFormGroup',
    mixins: [singleErrorExtractorMixin],
    props: {
      type: {
        type: String,
        default: 'text',
      },
      label: {
        type: String,
        default: '',
      },
      id: {
        type: String,
        default: '',
      },
      value: {
        type: [String, Number],
        default: '',
        required: true,
      },
      name: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      autocomplete: {
        type: String,
        default: '',
      },
    },
    computed: {
      isInputInvalid() {
        return this.activeErrorMessages && this.activeErrorMessages.length;
      },
    },
    methods: {
      onInput(event: any) {
        this.$emit('input', event.target.value);
      },
      onBlur() {
        this.$emit('blur');
      },
    },
  });
</script>

<style lang="sass">
  @import "BaseFormGroup"
</style>
