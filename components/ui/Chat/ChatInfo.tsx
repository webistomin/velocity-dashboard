import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';
import BaseButton from 'components/base/BaseButton';
import { BaseThumbnail } from 'components/base/BaseThumbnail/BaseThumbnail';
import { BaseTimeline, ITimeline } from 'components/base/BaseTimeline/BaseTimeline';

@Component({
  name: 'ChatInfo',
})
export default class ChatInfo extends VueComponent {
  timeline: ITimeline[] = [
    {
      icon: 'icon-mail',
      color: 'blue',
      text: 'Conversation started',
    },
    {
      icon: 'icon-graph',
      color: 'darkturquoise',
      text: 'Trip #12422',
    },
    {
      icon: 'icon-forbidden',
      color: 'red',
      text: 'Refund issue #12422',
    },
    {
      icon: 'icon-check',
      color: 'green',
      text: 'Conversation resolved',
    },
    {
      icon: 'icon-mail',
      color: 'blue',
      text: 'Conversation reopened',
    },
  ];

  render(): VNode {
    return (
      <aside class='chat__info'>
        <div class='chat__actions'>
          <BaseButton class='chat__info-btn' theme='success'>
            Mark resolved
          </BaseButton>
          <BaseButton class='chat__info-btn' theme='light'>
            Report
          </BaseButton>
        </div>
        <ul class='chat__info-list list'>
          <li class='chat__info-item list-item'>
            <strong class='chat__caption caption'>Client info</strong>
            <div class='chat__user-info'>
              <div class='chat__user-heading'>
                <BaseThumbnail image='/img/avatar.png' alt='1' size='m' />
                <div class='chat__user'>
                  <strong class='chat__username'>Nora M. Buchanan</strong>
                  <span class='chat__count'>4 interactions</span>
                </div>
              </div>
              <p class='chat__text paragraph'>
                This theme adds additional client and channel information. It's useful for Admins when you need a user's
                ID without wanting to waste time searching for it.
              </p>
            </div>
          </li>
          <li class='chat__info-item list-item'>
            <strong class='chat__caption caption'>Interactions timeline</strong>
            <BaseTimeline timeline={this.timeline} />
          </li>
          <li class='chat__info-item list-item'>
            <strong class='chat__caption caption'>Email</strong>
            <a class='link' href='mailto:123'>
              invision@invisionapp.com
            </a>
          </li>
          <li class='chat__info-item list-item'>
            <strong class='chat__caption caption'>Phone</strong>
            <a class='link' href='tel:123'>
              +144–3412–4422
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}
