import Vue, { RenderContext, VNode, CreateElement, PropType } from 'vue';

import './BaseThumbnail.sass';

export type IBaseThumbnailSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface IBaseThumbnailProps {
  image: string;
  alt: string;
  size?: IBaseThumbnailSize;
  isSquared?: boolean;
}

export const BaseThumbnail = Vue.extend({
  functional: true,
  props: {
    image: {
      type: String as PropType<IBaseThumbnailProps['image']>,
      default: '',
      required: true,
    },
    alt: {
      type: String as PropType<IBaseThumbnailProps['alt']>,
      default: '#',
      required: true,
    },
    size: {
      type: String as PropType<IBaseThumbnailProps['size']>,
      default: 's',
    },
    isSquared: {
      type: Boolean as PropType<IBaseThumbnailProps['isSquared']>,
      default: false,
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IBaseThumbnailProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { image, alt, size, isSquared } = ctx.props;
    return (
      <span
        class={`base-thumbnail base-thumbnail_size_${size} ${cls || ''} ${staticClass || ''} ${
          isSquared ? 'base-thumbnail_squared' : ''
        }`}>
        <picture class='base-thumbnail__picture picture'>
          <v-lazy-image
            src={image}
            alt={alt}
            class='base-thumbnail__img image'
            nativeOnError={(event: Event) => {
              const image = event.target as HTMLImageElement;
              if (image.src !== 'http://:0/' && image.src !== 'https://:0/') {
                image.src = '/img/avatar-placeholder.svg';
                image.classList.add('v-lazy-image-loaded');
              }
            }}
          />
        </picture>
      </span>
    );
  },
});
