import { Component, Prop, mixins } from 'nuxt-property-decorator';
import { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'vue-chartjs';
import { VueComponent } from 'types/vue-components';

export interface IBaseBarGraphProps {
  chartData: ChartData;
  options: ChartOptions;
  fallbackText?: string;
}

@Component({
  name: 'BaseBarGraphWithProps',
})
class BaseBarGraphWithProps extends VueComponent<IBaseBarGraphProps> {
  @Prop({ required: true })
  public readonly chartData!: IBaseBarGraphProps['chartData'];

  @Prop({ required: true })
  public readonly options!: IBaseBarGraphProps['options'];

  @Prop({ default: 'Bar graph' })
  public readonly fallbackText: IBaseBarGraphProps['fallbackText'];
}

@Component({
  name: 'BaseBarGraph',
})
export default class BaseBarGraph extends mixins(Bar, BaseBarGraphWithProps) {
  public mounted(): void {
    this.renderChart(this.chartData, this.options);

    this.$nextTick(() => {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      canvas.setAttribute('aria-label', this.fallbackText as string);
      canvas.setAttribute('role', 'img');
    });
  }
}
