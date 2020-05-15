import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './ChatMessages.sass';
import { BaseThumbnail } from 'components/base/BaseThumbnail/BaseThumbnail';

@Component({
  name: 'ChatMessages',
})
export default class ChatMessages extends VueComponent {
  public render(): VNode {
    return (
      <div class='chat-messages'>
        <div class='chat-messages__content'>
          <ul class='chat-messages__list list'>
            <li class='chat-messages__item chat-messages__item_own list-item'>
              <BaseThumbnail class='chat-messages__avatar' image='/img/avatar.png' size='s' alt='Me' />
              <div class='chat-messages__holder'>
                <strong class='chat-messages__name'>Anna</strong>
                <ul class='chat-messages__group-messages list'>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                </ul>
              </div>
            </li>
            <li class='chat-messages__item chat-messages__item_other list-item'>
              <BaseThumbnail class='chat-messages__avatar' image='/img/avatar.png' size='s' alt='Me' />
              <div class='chat-messages__holder'>
                <strong class='chat-messages__name'>Nora</strong>
                <ul class='chat-messages__group-messages list'>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                </ul>
              </div>
            </li>
            <li class='chat-messages__item chat-messages__item_own list-item'>
              <BaseThumbnail class='chat-messages__avatar' image='/img/avatar.png' size='s' alt='Me' />
              <div class='chat-messages__holder'>
                <strong class='chat-messages__name'>Anna</strong>
                <ul class='chat-messages__group-messages list'>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                </ul>
              </div>
            </li>
            <li class='chat-messages__item chat-messages__item_other list-item'>
              <BaseThumbnail class='chat-messages__avatar' image='/img/avatar.png' size='s' alt='Me' />
              <div class='chat-messages__holder'>
                <strong class='chat-messages__name'>Nora</strong>
                <ul class='chat-messages__group-messages list'>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                </ul>
              </div>
            </li>
            <li class='chat-messages__item chat-messages__item_own list-item'>
              <BaseThumbnail class='chat-messages__avatar' image='/img/avatar.png' size='s' alt='Me' />
              <div class='chat-messages__holder'>
                <strong class='chat-messages__name'>Anna</strong>
                <ul class='chat-messages__group-messages list'>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                </ul>
              </div>
            </li>
            <li class='chat-messages__item chat-messages__item_other list-item'>
              <BaseThumbnail class='chat-messages__avatar' image='/img/avatar.png' size='s' alt='Me' />
              <div class='chat-messages__holder'>
                <strong class='chat-messages__name'>Nora</strong>
                <ul class='chat-messages__group-messages list'>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                </ul>
              </div>
            </li>
            <li class='chat-messages__item chat-messages__item_own list-item'>
              <BaseThumbnail class='chat-messages__avatar' image='/img/avatar.png' size='s' alt='Me' />
              <div class='chat-messages__holder'>
                <strong class='chat-messages__name'>Anna</strong>
                <ul class='chat-messages__group-messages list'>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                </ul>
              </div>
            </li>
            <li class='chat-messages__item chat-messages__item_other list-item'>
              <BaseThumbnail class='chat-messages__avatar' image='/img/avatar.png' size='s' alt='Me' />
              <div class='chat-messages__holder'>
                <strong class='chat-messages__name'>Nora</strong>
                <ul class='chat-messages__group-messages list'>
                  <li class='chat-messages__group-item list-item'>
                    <p class='chat-messages__message paragraph'>
                      Hello John, thank you for calling Provide Support. How may I help you?
                    </p>
                    <time class='chat-messages__date'>18:54</time>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class='chat-messages__controls'>
          <div class='chat-messages__inputs'>
            <button class='chat-messages__emoji-picker btn' type='button'>
              <svg-icon name='icon-smile' width={20} height={20} />
            </button>
            <input type='text' class='chat-messages__input' placeholder='Message' />
            <div class='chat-messages__attach'>
              <label for='chat-attach' class='chat-messages__attach-label label'>
                <svg-icon name='icon-attach' width={23} height={20} />
              </label>
              <input type='file' id='chat-attach' class='chat-messages__attach-input visually-hidden' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
