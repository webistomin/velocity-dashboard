import { VueComponent } from 'types/vue-components';
import { Component, Emit } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseClose.sass';

export interface IBaseCloseProps {
  onClick?: () => void;
}

@Component({
  name: 'BaseClose',
})
export default class BaseClose extends VueComponent<IBaseCloseProps> {
  @Emit('click')
  public onClose() {}

  public render(): VNode {
    return <button class='base-close btn' type='button' aria-label='Close' onClick={this.onClose} />;
  }
}
