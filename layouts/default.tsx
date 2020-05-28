import { VueComponent } from 'types/vue-components';
import { Component, Watch } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import { State, Mutation } from 'vuex-class';

import TheHeader from 'components/partials/TheHeader';
import TheNavigation from 'components/partials/TheNavigation';
import { IUserInterfaceDB } from 'common/types/user/user-schema';
import { SiteThemes } from 'common/types/theme/site-themes';
import { IWeatherCurrentCoordinates } from 'common/types/weather/current';
import { detectUserInput } from '~/plugins/detectUserInput';

@Component({
  name: 'DefaultLayout',
})
export default class DefaultLayout extends VueComponent {
  isNavOpened: boolean = false;

  @State((state) => state.auth.user)
  private readonly getAuthUser!: IUserInterfaceDB;

  @Mutation('weather/setUserCoordinates') setUserCoordinates!: (coords: IWeatherCurrentCoordinates) => void;

  public mounted(): void {
    detectUserInput();
    const localStorageTheme = localStorage.getItem('theme');
    const userTheme = this?.getAuthUser?.theme;

    if (localStorageTheme !== userTheme) {
      const root = document.documentElement;
      root.className = `theme theme_${userTheme}`;
      localStorage.setItem('theme', userTheme || SiteThemes.SHELOB);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.setUserCoordinates(coords);
        },
        () => {},
        {
          enableHighAccuracy: true,
          timeout: 5000,
        }
      );
    }
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

  @Watch('$nuxt.isOffline')
  onOfflineMode(newValue: boolean) {
    if (newValue) {
      this.$notify({
        group: 'common',
        type: 'error',
        title: 'Offline',
        text: 'You are currently in offline mode, check your internet connection',
        duration: 5000,
      });
    }
  }

  @Watch('$nuxt.isOnline')
  onOnlineMode(newValue: boolean) {
    if (newValue) {
      this.$notify({
        group: 'common',
        type: 'success',
        title: 'Online',
        text: 'Connection has been restored, you can keep working',
        duration: 5000,
      });
    }
  }

  render(): VNode {
    return (
      <div class={`site-grid`} id='app'>
        {this.$nuxt.isOffline ? <div>You are offline</div> : null}
        <notifications group='common' position='top left' animation-name='v-popup-fade-left' />
        <TheHeader onOpenNav={this.toggleNav} isNavOpened={this.isNavOpened} />
        <TheNavigation onOpenNav={this.toggleNav} isNavOpened={this.isNavOpened} v-scroll-lock={this.shouldLockBody} />
        <nuxt keep-alive keep-alive-props={{ max: 2 }} />
      </div>
    );
  }
}
