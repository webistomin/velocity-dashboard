import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseToggle from 'components/base/BaseToggle';
import BaseThumbnail from 'components/base/BaseThumbnail';

import './TheNavigation.sass';

export interface INavigationProps {
  isNavOpened: boolean;
}

export interface INavigationLinks {
  name: string;
  icon: string;
  to: string;
}

@Component({
  name: 'TheNavigation',
})
export default class TheNavigation extends VueComponent<INavigationProps> {
  @Prop({ default: false })
  private readonly isNavOpened!: INavigationProps['isNavOpened'];

  navLinks: INavigationLinks[] = [
    {
      name: 'Overview',
      icon: 'icon-grid',
      to: '/',
    },
    {
      name: 'Analytics',
      icon: 'icon-histograms',
      to: '/analytics',
    },
    {
      name: 'Vehicles',
      icon: 'icon-car',
      to: '/vehicles',
    },
    {
      name: 'Service',
      icon: 'icon-service',
      to: '/service',
    },
    {
      name: 'Map',
      icon: 'icon-map',
      to: '/map',
    },
    {
      name: 'Chat',
      icon: 'icon-mail',
      to: '/chat',
    },
    {
      name: 'Settings',
      icon: 'icon-settings',
      to: '/settings',
    },
  ];

  @Emit('openNav')
  onToggleClick() {}

  render(): VNode {
    return (
      <aside class='main-nav'>
        <BaseToggle class='main-nav__toggle' size='s' onClick={this.onToggleClick} isActive={this.isNavOpened} />
        <div class='main-nav__user'>
          <BaseThumbnail class='main-nav__thumb' image='/img/avatar.jpg' size='xs' alt='user' isSquared={true} />
          <span class='main-nav__info'>
            <strong class='main-nav__welcome'>Welcome</strong>
            <strong class='main-nav__username'>Alesha</strong>
          </span>
        </div>
        <nav class='main-nav__nav'>
          <ul class='main-nav__list list'>
            {this.navLinks.map((link) => {
              return (
                <li class='main-nav__item list-item' key={link.name}>
                  <nuxt-link class='main-nav__link link' to={link.to}>
                    <svg-icon name={link.icon} width={24} height={24} />
                    {link.name}
                  </nuxt-link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    );
  }
}
