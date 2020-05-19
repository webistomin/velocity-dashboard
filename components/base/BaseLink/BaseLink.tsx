import { VueComponent } from 'types/vue-components';
import { Prop, Component, Emit } from 'nuxt-property-decorator';
import { ButtonTypes } from 'types/common/button-types';

import './BaseLink.sass';

export type IBaseLinkThemes = 'default' | 'gray';

export interface IBaseLinkProps {
  theme?: IBaseLinkThemes;
  onClick?: () => void;
}

export interface IBaseLinkPropsWithLink extends IBaseLinkProps {
  to: string;
  isButton?: never;
  type?: never;
}

export interface IBaseLinkPropsWithButton extends IBaseLinkProps {
  to?: never;
  isButton: boolean;
  type?: ButtonTypes;
}

export type IConditionalBaseLinkProps = IBaseLinkPropsWithLink | IBaseLinkPropsWithButton;

@Component({
  name: 'BaseLink',
})
export default class BaseLink extends VueComponent<IConditionalBaseLinkProps> {
  @Prop({ default: 'default' })
  private theme!: IBaseLinkProps['theme'];

  @Prop()
  private to!: IBaseLinkPropsWithLink['to'];

  @Prop()
  private isButton!: IBaseLinkPropsWithButton['isButton'];

  @Prop({ default: 'button' })
  private type!: IBaseLinkPropsWithButton['type'];

  @Emit('click')
  public onClick(): void {}

  public render() {
    const linkComponentDefaultProps = {
      theme: this.theme,
      class: `link base-link base-link_theme_${this.theme} ${this.isButton ? 'btn' : ''}`,
      on: {
        click: this.onClick,
      },
    };
    const linkComponentContent = <span className='base-link__content'>{this.$slots.default}</span>;
    const isButton = this.isButton;
    const url = this.to;

    // Button link
    if (isButton) {
      return (
        <button {...linkComponentDefaultProps} type={this.type}>
          {linkComponentContent}
        </button>
      );
    }

    // Download link
    if (url.match(/([a-zA-Z0-9\s_\\.\-():])+(.doc|.docx|.pdf|.zip|.rar|.7z|xlsx)$/)) {
      return (
        <a {...linkComponentDefaultProps} href={url} download>
          {linkComponentContent}
        </a>
      );
      // External Link
    } else if (url.match(/^(http(s)?|ftp):\/\//)) {
      return (
        <a {...linkComponentDefaultProps} href={url} target='_blank' rel='noopener noreferrer nofollow'>
          {linkComponentContent}
        </a>
      );
    }

    // Route link
    return (
      <nuxt-link {...linkComponentDefaultProps} to={url}>
        {linkComponentContent}
      </nuxt-link>
    );
  }
}
