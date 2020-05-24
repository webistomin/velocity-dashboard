import { VueComponent } from 'types/vue-components';
import { Component, Watch } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import TheHeader from 'components/partials/TheHeader';
import TheNavigation from 'components/partials/TheNavigation';

import { detectUserInput } from '~/plugins/detectUserInput';

@Component({
  name: 'DefaultLayout',
})
export default class Default extends VueComponent {
  isNavOpened: boolean = false;

  public mounted(): void {
    detectUserInput();
  }

  toggleNav() {
    this.isNavOpened = !this.isNavOpened;
  }

  get shouldLockBody(): boolean {
    return this.isNavOpened && window.matchMedia('(max-width: 1023px)').matches;
  }

  @Watch('$route')
  onRouteChanged() {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      this.isNavOpened = false;
    }
  }

  render(): VNode {
    return (
      <div class={`site-grid`} id='app'>
        <notifications group='common' position='top left' animation-name='v-popup-fade-left' />
        <TheHeader onOpenNav={this.toggleNav} isNavOpened={this.isNavOpened} />
        <TheNavigation onOpenNav={this.toggleNav} isNavOpened={this.isNavOpened} v-scroll-lock={this.shouldLockBody} />
        <nuxt />
      </div>
    );
  }
}
