import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseToggle.sass';

export type IBaseToggleSize = 'xs' | 's';

export interface IBaseToggleProps {
  size?: IBaseToggleSize;
  isActive: boolean;
  onClick?: () => void;
}

@Component({
  name: 'BaseToggle',
})
export default class BaseToggle extends VueComponent<IBaseToggleProps> {
  @Prop({ default: 'xs' })
  private readonly size!: IBaseToggleProps['size'];

  @Prop({ default: false, required: true })
  private readonly isActive!: IBaseToggleProps['isActive'];

  @Emit('click')
  public onToggleClick() {}

  public render(): VNode {
    const { size, isActive } = this;
    return (
      <button
        data-jest='base-toggle'
        class={`base-toggle btn base-toggle_size_${size} ${isActive ? 'base-toggle_active' : ''}`}
        type='button'
        aria-label='Toggle'
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
