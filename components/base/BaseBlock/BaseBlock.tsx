import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseBlock.sass';

export interface IBaseBlockProps {
  title?: string;
  hasOptions?: boolean;
}

@Component({
  name: 'BaseBlock',
})
export default class BaseBlock extends VueComponent<IBaseBlockProps> {
  @Prop()
  private readonly title!: IBaseBlockProps['title'];

  @Prop()
  private readonly hasOptions!: IBaseBlockProps['hasOptions'];

  render(): VNode {
    return (
      <div class='base-block'>
        <div class='base-block__heading'>
          <h3 class='base-block__title caption title'>{this.title}</h3>
          <div class='base-block__options-block'>
            <button class='base-block__options-btn btn'>
              <svg-icon name='icon-options' width={16} height={16} />
            </button>
            <div class='base-block__options'>{this.$slots.options}</div>
          </div>
        </div>
        <div class='base-block__content'>{this.$slots.default}</div>
      </div>
    );
  }
}
