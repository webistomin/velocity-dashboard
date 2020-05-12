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

  onSortClick(field: IBaseTableConfig['key']) {
    console.log(field);
  }

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
          <RecycleScroller class='base-table__scroller' items={this.tableData} item-size={95} key-field='id'>
            {this.getTableRows}
          </RecycleScroller>
        </div>
      </div>
    );
  }
}
