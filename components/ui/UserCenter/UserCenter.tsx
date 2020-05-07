import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseThumbnail from 'components/base/BaseThumbnail';

import './UserCenter.sass';

@Component({
  name: 'UserCenter',
})
export default class UserCenter extends VueComponent {
  render(): VNode {
    return (
      <div class='user-center'>
        <button class='user-center__btn btn'>
          <BaseThumbnail image='/img/avatar.jpg' size='s' alt='User' />
        </button>
      </div>
    );
  }
}
