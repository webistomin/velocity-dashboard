<template lang="pug">
  component(
    v-bind='getTag'
    :class='[`base-link_theme_${theme}`, `${isButton ? "btn" : ""}`]'
    @click='onClick'
    ).base-link.link
    span.base-link__content
      slot
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  export interface IBaseLinkDownload {
    is: string;
    href: string;
    download: string;
  }

  export interface IBaseLinkExternal {
    is: string;
    href: string;
    target: string;
    rel: string;
  }

  export interface IBaseLinkRoute {
    is: string;
    to: string;
  }

  export interface IBaseLinkButton {
    is: string;
    type: string;
  }

  const BaseLinkProps = Vue.extend({
    props: {
      to: {
        type: String,
        default: '',
      },
      theme: {
        type: String,
        default: 'default',
      },
      isButton: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'button',
      },
    },
  });

  @Component({
    name: 'BaseLink',
  })
  export default class BaseLink extends BaseLinkProps {
    public onClick(): void {
      this.$emit('click');
    }

    public get getTag(): IBaseLinkDownload | IBaseLinkExternal | IBaseLinkRoute | IBaseLinkButton {
      const isButton = this.isButton;

      if (isButton) {
        return {
          is: 'button',
          type: this.type,
        };
      }

      const url = this.to;
      if (url.match(/([a-zA-Z0-9\s_\\.\-():])+(.doc|.docx|.pdf|.zip|.rar|.7z|xlsx)$/)) {
        return {
          is: 'a',
          href: url,
          download: '',
        };
      } else if (url.match(/^(http(s)?|ftp):\/\//)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener noreferrer nofollow',
        };
      }

      return {
        is: 'nuxt-link',
        to: url,
      };
    }
  }
</script>

<style lang="sass">
  @import "BaseLink"
</style>
