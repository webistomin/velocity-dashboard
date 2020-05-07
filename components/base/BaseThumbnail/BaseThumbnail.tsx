import { RenderContext, VNode } from 'vue';

import './BaseThumbnail.sass';

export type IBaseThumbnailSize = 'xs' | 's' | 'm' | 'l';

export interface IBaseThumbnailProps {
  image: string;
  alt: string;
  size?: IBaseThumbnailSize;
  isSquared?: boolean;
}

export const BaseThumbnail = (context: RenderContext<IBaseThumbnailProps>): VNode => {
  const { class: cls, staticClass } = context.data;
  const { image, alt, size = 's', isSquared = false } = context.props;
  return (
    <span
      class={`base-thumbnail base-thumbnail_size_${size} ${cls || ''} ${staticClass || ''} ${
        isSquared ? 'base-thumbnail_squared' : ''
      }`}>
      <picture class='base-thumbnail__picture picture'>
        <v-lazy-image src={image} alt={alt} class='base-thumbnail__img image' />
      </picture>
    </span>
  );
};
