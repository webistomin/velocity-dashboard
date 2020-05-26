import Vue, { RenderContext, VNode, CreateElement } from 'vue';

export interface IBaseTableItemProps {
  index: number;
  source: object;
}

export const BaseTableItem = Vue.extend({
  functional: true,
  props: {
    index: {
      type: Number,
      default: 0,
    },
    source: {
      type: Object,
      default: () => {},
    },
  },
  render(_h: CreateElement, ctx: RenderContext<IBaseTableItemProps>): VNode {
    const { staticClass, class: cls } = ctx.data;
    const { source } = ctx.props;
    return (
      <div class={`base-table__row ${staticClass || ''} ${cls || ''}`}>
        {Object.values(source).map((field) => {
          return <span class='base-table__body-data base-table__cell'>{field}</span>;
        })}
      </div>
    );
  },
});
