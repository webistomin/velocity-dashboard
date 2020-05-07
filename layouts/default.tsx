import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import TheHeader from 'components/partials/TheHeader';
import TheNavigation from 'components/partials/TheNavigation';

import { detectUserInput } from '~/plugins/detectUserInput';

@Component({
  name: 'DefaultLayout',
})
export default class Default extends VueComponent {
  isNavOpened: boolean = false;

  mounted(): void {
    detectUserInput();
  }

  toggleNav() {
    this.isNavOpened = !this.isNavOpened;
  }

  render(): VNode {
    return (
      <div class={`site-grid ${this.isNavOpened ? 'site-grid_full' : ''}`} id='app'>
        <TheNavigation onOpenNav={this.toggleNav} isNavOpened={this.isNavOpened} />
        <TheHeader />
        <nuxt />
      </div>
    );
  }
}
