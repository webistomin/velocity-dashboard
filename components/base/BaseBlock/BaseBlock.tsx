import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseBlock.sass';

export interface IBaseBlockProps {
  title?: string;
  hasOptions?: boolean;
  contentMix?: string;
  isSimple?: boolean;
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

  @Prop()
  private readonly isSimple!: IBaseBlockProps['isSimple'];

  public render(): VNode {
    const { title, hasOptions, contentMix, isSimple } = this;
    return (
      <div class={`base-block ${isSimple ? 'base-block_simple' : ''}`}>
        {title || hasOptions ? (
          <div class='base-block__heading'>
            {title ? <h3 class='base-block__title caption title'>{title}</h3> : null}
            {hasOptions ? (
              <div class='base-block__options-block'>
                <button class='base-block__options-btn btn' aria-label='Toggle block options'>
                  <svg-icon name='icon-options' width={16} height={16} />
                </button>
                <div class='base-block__options'>{this.$slots.options}</div>
              </div>
            ) : null}
          </div>
        ) : null}
        <div class={`base-block__content ${contentMix || ''}`}>{this.$slots.default}</div>
      </div>
    );
  }
}
