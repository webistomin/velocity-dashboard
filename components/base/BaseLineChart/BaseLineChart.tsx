import { Component, Prop } from 'nuxt-property-decorator';
import { Line } from 'vue-chartjs';
import { ChartData, ChartOptions } from 'chart.js';
import { VueComponent } from 'types/vue-components';

export interface IBaseLineChartGradient {
  red: number;
  green: number;
  blue: number;
}

export interface IBaseLineChartProps {
  chartData: ChartData;
  options: ChartOptions;
  gradients?: IBaseLineChartGradient[];
  fallbackText?: string;
}

@Component({
  name: 'BaseLineChart',
  extends: Line,
})
export default class BaseLineChart extends VueComponent<IBaseLineChartProps> {
  @Prop({ required: true })
  readonly chartData!: IBaseLineChartProps['chartData'];

  @Prop({ required: true })
  private readonly options!: IBaseLineChartProps['options'];

  @Prop()
  readonly gradients!: IBaseLineChartProps['gradients'];

  @Prop({ default: 'Linear graph' })
  private readonly fallbackText: IBaseLineChartProps['fallbackText'];

  public mounted(): void {
    if (this.gradients) {
      this.constructGradients(this.gradients);
    }

    // @ts-ignore
    this.renderChart(this.chartData, this.options);

    this.$nextTick(() => {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      canvas.setAttribute('aria-label', this.fallbackText || 'Linear graph');
      canvas.setAttribute('role', 'img');
    });
  }

  constructGradients(gradients: IBaseLineChartGradient[]) {
    const datasets = this.chartData.datasets;

    gradients.forEach((gradient, index) => {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const graphGradient = ctx.createLinearGradient(0, 0, 0, 450);

        graphGradient.addColorStop(0, `rgba(${gradient.red}, ${gradient.green}, ${gradient.blue}, 0.4)`);
        graphGradient.addColorStop(0.3, `rgba(${gradient.red}, ${gradient.green}, ${gradient.blue}, 0.15)`);
        graphGradient.addColorStop(0.5, `rgba(${gradient.red}, ${gradient.green}, ${gradient.blue}, 0.05)`);
        graphGradient.addColorStop(1, `rgba(${gradient.red}, ${gradient.green}, ${gradient.blue}, 0)`);

        if (datasets && datasets[index]) {
          datasets[index].backgroundColor = graphGradient;
        }
      }
    });
  }
}
