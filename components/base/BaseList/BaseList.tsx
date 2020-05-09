import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';

import BaseThumbnail from 'components/base/BaseThumbnail';

import './BaseList.sass';

export interface IBaseList {
  image?: string;
  name: string;
  text: string;
  statistic: string;
  price: string;
}

export interface IBaseListProps {
  list: IBaseList[];
  limit?: number;
}

@Component({
  name: 'BaseList',
})
export default class BaseList extends VueComponent<IBaseListProps> {
  @Prop()
  private readonly list!: IBaseListProps['list'];

  @Prop({ default: 6 })
  private readonly limit!: IBaseListProps['limit'];

  render() {
    return (
      <div class='base-list'>
        <ul class='base-list__list list'>
          {this.list.slice(0, this.limit).map((item, index) => {
            return (
              <li class='base-list__item list-item' key={`item-${index}`}>
                <div class='base-list__col base-list__col_left'>
                  <BaseThumbnail size='m' image={item.image} alt={item.name} />
                </div>
                <div class='base-list__col base-list__col_right'>
                  <div class='base-list__row'>
                    <strong class='base-list__name'>{item.name}</strong>
                    <span class='base-list__price'>{item.price}</span>
                  </div>
                  <div class='base-list__row'>
                    <strong class='base-list__text'>{item.text}</strong>
                    <span class='base-list__stat'>{item.statistic}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
