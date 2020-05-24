import Vue, { RenderContext, VNode, CreateElement } from 'vue';

import { BaseTitle } from 'components/base/BaseTitle/BaseTitle';

import './NotFound.sass';

export const NotFound = Vue.extend({
  functional: true,
  render(_h: CreateElement, ctx: RenderContext<{}>): VNode {
    const { staticClass, class: cls } = ctx.data;
    return (
      <div class={`not-found ${staticClass || ''} ${cls || ''}`}>
        <div class='not-found__container container'>
          <div class='not-found__content'>
            <div class='not-found__video-block'>
              <video preload='auto' muted playsInline autoPlay='autoplay' loop='loop' class='not-found__video'>
                <source src='/video/login-city.webm' type='video/webm; codecs="vp8, vorbis"' />
                <source src='/video/login-city.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
              </video>
            </div>
            <div class='not-found__mask' />
          </div>
          <div class='not-found__actions'>
            <BaseTitle level={1} class='not-found__title'>
              Oops, sorry we can't find that page!
            </BaseTitle>
            <nuxt-link class='not-found__link link' to='/'>
              To home page
            </nuxt-link>
          </div>
        </div>
      </div>
    );
  },
});
