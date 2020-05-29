import { VueComponent } from 'types/vue-components';
import { Component, Emit, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';
// @ts-ignore
import VirtualList from 'vue-virtual-scroll-list';

import BaseEmpty from 'components/base/BaseEmpty';
import { BaseTableItem } from './BaseTableItem';

import './BaseTable.sass';

export interface IBaseTableConfig {
  key: string;
  title: string;
}

export interface IBaseTableProps {
  tableConfig: IBaseTableConfig[];
  tableData: object[];
  scrollerMix?: string;
  onSort?: (field: IBaseTableConfig['key']) => void;
  currentSort?: string;
}

@Component({
  name: 'BaseTable',
  components: { VirtualList },
})
export default class BaseTable extends VueComponent<IBaseTableProps> {
  @Prop({ required: true })
  private readonly tableConfig!: IBaseTableProps['tableConfig'];

  @Prop({ required: true })
  private readonly tableData!: IBaseTableProps['tableData'];

  @Prop()
  private readonly scrollerMix!: IBaseTableProps['scrollerMix'];

  @Prop()
  private readonly currentSort!: IBaseTableProps['currentSort'];

  @Emit('sort')
  public onSortClick(field: IBaseTableConfig['key']) {
    return field;
  }

  public render(): VNode {
    return (
      <div class='base-table'>
        <div class='base-table__wrapper'>
          <div class='base-table__head'>
            {this.tableConfig.map((config) => {
              return (
                <div class='base-table__head-data base-table__cell'>
                  <button
                    class={`base-table__sort btn caption ${
                      this.currentSort === config.key ? 'base-table__sort_active' : ''
                    }`}
                    type='button'
                    onClick={() => this.onSortClick(config.key)}>
                    <span class='base-table__sort-name'>{config.title}</span>
                    <svg-icon class='base-table__icon' name='icon-dropdown' width={16} height={16} />
                  </button>
                </div>
              );
            })}
          </div>

          {this.tableData.length > 0 ? (
            <VirtualList
              class={`base-table__scroller ${this.scrollerMix || ''}`}
              data-key='id'
              data-sources={this.tableData}
              data-component={BaseTableItem}
              wrap-class='base-table__scroller-wrapper'
              item-class='base-table__scroller-item'
              estimate-size={82}
            />
          ) : (
            <BaseEmpty />
          )}
        </div>
      </div>
    );
  }
}
