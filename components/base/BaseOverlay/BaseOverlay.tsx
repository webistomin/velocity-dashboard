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
  @Prop({ default: false, required: true })
  private readonly isVisible!: IBaseOverlayProps['isVisible'];

  @Emit('click')
  public onOverlayClick(): void {}

  public render(): VNode {
    return <div class={`base-overlay ${this.isVisible ? 'base-overlay_visible' : ''}`} onClick={this.onOverlayClick} />;
  }
}
