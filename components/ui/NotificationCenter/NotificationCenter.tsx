import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import { BaseNotify } from 'components/base/BaseNotify/BaseNotify';

import './NotificationCenter.sass';

@Component({
  name: 'NotificationCenter',
})
export default class NotificationCenter extends VueComponent {
  render(): VNode {
    return (
      <div class='notification-center'>
        <button class='notification-center__btn btn' type='button'>
          <span class='notification-center__btn-content'>
            <BaseNotify class='notification-center__status' />
            <svg-icon name='icon-bell' width={20} height={22} />
          </span>
        </button>
      </div>
    );
  }
}
