import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseOverlay.sass';

export interface IBaseOverlayProps {
  isVisible: boolean;
  onClick?: () => void;
}

@Component({
  name: 'BaseOverlay',
})
export default class BaseOverlay extends VueComponent<IBaseOverlayProps> {
  @Prop({ default: false })
  private readonly isVisible!: IBaseOverlayProps['isVisible'];

  @Emit('click')
  onOverlayClick(): void {}

  render(): VNode {
    return <div class={`base-overlay ${this.isVisible ? 'base-overlay_visible' : ''}`} onClick={this.onOverlayClick} />;
  }
}
