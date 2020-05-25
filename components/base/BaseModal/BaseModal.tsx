import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
// @ts-ignore
import FocusTrap from 'vue-focus-lock';

import BaseOverlay from 'components/base/BaseOverlay';

import './BaseModal.sass';

export interface IBaseModalProps {
  isVisible: boolean;
  transitionName?: string;
  onClose?: () => void;
}

@Component({
  name: 'BaseModal',
  components: { FocusTrap },
})
export default class BaseModal extends VueComponent<IBaseModalProps> {
  @Prop({ required: true })
  private readonly isVisible!: IBaseModalProps['isVisible'];

  @Prop({ default: 'modal-fade' })
  private readonly transitionName!: IBaseModalProps['transitionName'];

  @Emit('close')
  public closeModal(): void {}

  public toggleModalVisibilityByKeyDown(event: KeyboardEvent) {
    if (this.isVisible && event.key === 'Escape') {
      this.closeModal();
    }
  }

  public mounted(): void {
    document.addEventListener('keydown', this.toggleModalVisibilityByKeyDown);
  }

  public beforeDestroy(): void {
    document.removeEventListener('keydown', this.toggleModalVisibilityByKeyDown);
  }

  render(): VNode {
    const { transitionName, isVisible } = this;

    return (
      <transition name={transitionName}>
        <div class='base-modal' vShow={isVisible}>
          <button class='base-modal__close-btn btn' type='button' aria-label='Close modal' onClick={this.closeModal} />
          <BaseOverlay isVisible={isVisible} onClick={this.closeModal} />
          <FocusTrap class='base-modal__locker' disabled={!isVisible}>
            <div class='base-modal__wrapper'>
              <div class='base-modal__content'>{this.$slots.default}</div>
            </div>
          </FocusTrap>
        </div>
      </transition>
    );
  }
}
