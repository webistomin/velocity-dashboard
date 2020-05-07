import { RenderContext } from 'vue';

import './BaseNotify.sass';

export const BaseNotify = (context: RenderContext) => {
  return <span class={`base-notify ${context.data.class || ''} ${context.data.staticClass || ''}`} />;
};
