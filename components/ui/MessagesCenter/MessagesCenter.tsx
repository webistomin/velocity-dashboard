import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseNotify from 'components/base/BaseNotify';

import './MessagesCenter.sass';

@Component({
  name: 'MessagesCenter',
})
export default class MessagesCenter extends VueComponent {
  render(): VNode {
    return (
      <div class='messages-center'>
        <button class='messages-center__btn btn' type='button'>
          <span class='messages-center__btn-content'>
            <BaseNotify class='messages-center__status' />
            <svg-icon name='icon-mail' width={23} height={18} />
          </span>
        </button>
      </div>
    );
  }
}
