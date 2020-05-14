import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import './BaseTable.sass';

export interface IBaseTableConfig {
  key: string;
  title: string;
}

export interface IBaseTableProps {
  tableConfig: IBaseTableConfig[];
  tableData: object[];
}

@Component({
  name: 'BaseTable',
})
export default class BaseTable extends VueComponent<IBaseTableProps> {
  @Prop()
  private readonly tableConfig!: IBaseTableProps['tableConfig'];

  @Prop()
  private readonly tableData!: IBaseTableProps['tableData'];

  onSortClick(_field: IBaseTableConfig['key']) {}

  get getTableRows() {
    return this.tableData.map((row) => {
      return (
        <div class='base-table__row'>
          {Object.values(row).map((field) => {
            return <span class='base-table__body-data base-table__cell'>{field}</span>;
          })}
        </div>
      );
    });
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
                    class='base-table__sort btn caption'
                    type='button'
                    onClick={() => this.onSortClick(config.key)}>
                    <span class='base-table__sort-name'>{config.title}</span>
                    <svg-icon class='base-table__icon' name='icon-dropdown' width={16} height={16} />
                  </button>
                </div>
              );
            })}
          </div>
          <DynamicScroller
            class='base-table__scroller'
            items={this.tableData}
            item-size={95}
            minItemSize={75}
            key-field='id'>
            <div class='base-table__row'>
              <span class='base-table__body-data base-table__cell'>#2178</span>
              <span class='base-table__body-data base-table__cell'>Refund request</span>
              <span class='base-table__body-data base-table__cell'>05/04/2018</span>
              <span class='base-table__body-data base-table__cell'>Active</span>
            </div>
          </DynamicScroller>
        </div>
      </div>
    );
  }
}
