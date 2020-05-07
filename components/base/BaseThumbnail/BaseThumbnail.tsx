import { RenderContext, VNode } from 'vue';

import './BaseThumbnail.sass';

export type IBaseThumbnailSize = 'xs' | 's' | 'm' | 'l';

export interface IBaseThumbnailProps {
  image: string;
  alt: string;
  size?: IBaseThumbnailSize;
}

export const BaseThumbnail = (context: RenderContext<IBaseThumbnailProps>): VNode => {
  const { class: cls, staticClass } = context.data;
  const { image, alt, size = 's' } = context.props;
  return (
    <span class={`base-thumbnail base-thumbnail_size_${size} ${cls || ''} ${staticClass || ''}`}>
      <picture class='base-thumbnail__picture picture'>
        <img src={image} alt={alt} class='base-thumbnail__img image' />
      </picture>
    </span>
  );
};
