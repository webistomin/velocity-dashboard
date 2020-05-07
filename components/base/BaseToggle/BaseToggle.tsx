import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseToggle.sass';

@Component({
  name: 'BaseToggle',
})
export default class BaseToggle extends VueComponent {
  render(): VNode {
    return (
      <button class='base-toggle btn' type='button'>
        <span class='base-toggle__line' />
        <span class='base-toggle__line' />
        <span class='base-toggle__line' />
      </button>
    );
  }
}
