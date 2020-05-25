import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { ChartData, ChartOptions } from 'chart.js';
import { Pie } from 'vue-chartjs';

export interface IBasePieGraphProps {
  chartData: ChartData;
  options: ChartOptions;
  fallbackText?: string;
}

@Component({
  name: 'BasePieGraph',
  extends: Pie,
})
export default class BasePieGraph extends VueComponent<IBasePieGraphProps> {
  @Prop({ required: true })
  private readonly chartData!: IBasePieGraphProps['chartData'];

  @Prop({ required: true })
  private readonly options!: IBasePieGraphProps['options'];

  @Prop({ default: 'Pie graph' })
  private readonly fallbackText: IBasePieGraphProps['fallbackText'];

  public mounted(): void {
    // @ts-ignore
    this.renderChart(this.chartData, this.options);

    this.$nextTick(() => {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      canvas.setAttribute('aria-label', this.fallbackText || 'Pie graph');
      canvas.setAttribute('role', 'img');
    });
  }
}
