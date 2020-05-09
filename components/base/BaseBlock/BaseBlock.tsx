import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseBlock.sass';

export interface IBaseBlockProps {
  title?: string;
  hasOptions?: boolean;
  contentMix?: string;
}

@Component({
  name: 'BaseBlock',
})
export default class BaseBlock extends VueComponent<IBaseBlockProps> {
  @Prop()
  private readonly title!: IBaseBlockProps['title'];

  @Prop()
  private readonly hasOptions!: IBaseBlockProps['hasOptions'];

  @Prop()
  private readonly contentMix!: IBaseBlockProps['contentMix'];

  render(): VNode {
    return (
      <div class='base-block'>
        {this.title || this.hasOptions ? (
          <div class='base-block__heading'>
            {this.title ? <h3 class='base-block__title caption title'>{this.title}</h3> : null}
            {this.hasOptions ? (
              <div class='base-block__options-block'>
                <button class='base-block__options-btn btn'>
                  <svg-icon name='icon-options' width={16} height={16} />
                </button>
                <div class='base-block__options'>{this.$slots.options}</div>
              </div>
            ) : null}
          </div>
        ) : null}
        <div class={`base-block__content ${this.contentMix || ''}`}>{this.$slots.default}</div>
      </div>
    );
  }
}
