import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseToggle from 'components/base/BaseToggle';
import BaseThumbnail from 'components/base/BaseThumbnail';
import BaseOverlay from 'components/base/BaseOverlay';

import './TheNavigation.sass';

export interface INavigationProps {
  isNavOpened: boolean;
  onOpenNav?: () => void;
}

export interface INavigationLinks {
  name: string;
  icon: string;
  to: string;
  adminOnly: boolean;
}

@Component({
  name: 'TheNavigation',
})
export default class TheNavigation extends VueComponent<INavigationProps> {
  @Prop({ default: false })
  private readonly isNavOpened!: INavigationProps['isNavOpened'];

  public isUserAdmin: boolean = false;

  public navLinks: INavigationLinks[] = [
    {
      name: 'Overview',
      icon: 'icon-grid',
      to: '/',
      adminOnly: false,
    },
    {
      name: 'Analytics',
      icon: 'icon-histograms',
      to: '/analytics',
      adminOnly: true,
    },
    {
      name: 'Vehicles',
      icon: 'icon-car',
      to: '/vehicles',
      adminOnly: true,
    },
    {
      name: 'Service',
      icon: 'icon-service',
      to: '/reminders',
      adminOnly: true,
    },
    {
      name: 'Map',
      icon: 'icon-map',
      to: '/map',
      adminOnly: true,
    },
    {
      name: 'Chat',
      icon: 'icon-mail',
      to: '/chat',
      adminOnly: false,
    },
    {
      name: 'Settings',
      icon: 'icon-settings',
      to: '/settings',
      adminOnly: false,
    },
  ];

  public created(): void {
    this.isUserAdmin = this.$auth.user.role === 'admin';
  }

  get getFilteredLinks(): INavigationLinks[] {
    const allLinks = this.navLinks;
    const isAdmin = this.isUserAdmin;

    if (isAdmin) {
      return allLinks;
    }

    return allLinks.filter((link) => !link.adminOnly);
  }

  @Emit('openNav')
  public onToggleClick(): void {}

  public render(): VNode {
    return (
      <aside class={`main-nav ${this.isNavOpened ? 'main-nav_visible' : ''}`}>
        <div class='main-nav__wrapper'>
          <BaseToggle class='main-nav__toggle' size='s' onClick={this.onToggleClick} isActive={this.isNavOpened} />
          <div class='main-nav__user'>
            <BaseThumbnail class='main-nav__thumb' image='/img/avatar.png' size='xs' alt='user' isSquared={true} />
            <span class={`main-nav__info ${this.isNavOpened ? 'main-nav__info_visible' : ''}`}>
              <strong class='main-nav__welcome'>Welcome</strong>
              <strong class='main-nav__username'>Alexey Istomin</strong>
            </span>
          </div>
          <nav class='main-nav__nav'>
            <ul class='main-nav__list list'>
              {this.getFilteredLinks.map((link) => {
                return (
                  <li class='main-nav__item list-item' key={link.name}>
                    <nuxt-link class='main-nav__link link' to={link.to} aria-label={link.name} title={link.name}>
                      <svg-icon name={link.icon} width={24} height={24} />
                      <span class={`main-nav__link-name ${this.isNavOpened ? 'main-nav__link-name_visible' : ''}`}>
                        {link.name}
                      </span>
                    </nuxt-link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <BaseOverlay onClick={this.onToggleClick} isVisible={this.isNavOpened} class='main-nav__overlay' />
      </aside>
    );
  }
}
