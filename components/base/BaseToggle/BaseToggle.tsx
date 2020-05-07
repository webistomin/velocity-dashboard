import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseToggle.sass';

export type IBaseToggleSize = 'xs' | 's';

export interface IBaseToggleProps {
  size?: IBaseToggleSize;
  isActive: boolean;
}

@Component({
  name: 'BaseToggle',
})
export default class BaseToggle extends VueComponent<IBaseToggleProps> {
  @Prop({ default: 'xs' })
  private readonly size!: IBaseToggleProps['size'];

  @Prop({ default: false })
  private readonly isActive!: IBaseToggleProps['isActive'];

  @Emit('click')
  onToggleClick() {}

  render(): VNode {
    const { size, isActive } = this;
    return (
      <button
        class={`base-toggle btn base-toggle_size_${size} ${isActive ? 'base-toggle_active' : ''}`}
        type='button'
        onClick={this.onToggleClick}>
        <span class='base-toggle__wrapper'>
          <span class='base-toggle__line' />
          <span class='base-toggle__line' />
          <span class='base-toggle__line' />
        </span>
      </button>
    );
  }
}
