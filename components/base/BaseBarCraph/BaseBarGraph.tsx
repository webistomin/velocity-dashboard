import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'vue-chartjs';

export interface IBaseBarGraphProps {
  chartData: ChartData;
  options?: ChartOptions;
  fallbackText?: string;
}

@Component({
  name: 'BaseBarGraph',
  extends: Bar,
})
export default class BaseBarGraph extends VueComponent<IBaseBarGraphProps> {
  @Prop()
  private readonly chartData!: IBaseBarGraphProps['chartData'];

  @Prop()
  private readonly options!: IBaseBarGraphProps['options'];

  @Prop({ default: 'Linear graph' })
  private readonly fallbackText: IBaseBarGraphProps['fallbackText'];

  mounted(): void {
    // @ts-ignore
    this.renderChart(this.chartData, this.options);

    this.$nextTick(() => {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      canvas.setAttribute('aria-label', this.fallbackText || 'Bar graph');
      canvas.setAttribute('role', 'img');
    });
  }
}
