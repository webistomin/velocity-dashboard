import { VueComponent } from 'types/vue-components';
import { Component, Prop } from 'nuxt-property-decorator';
import { Line } from 'vue-chartjs';
import { ChartData, ChartOptions } from 'chart.js';

export interface IBaseLineChartGradient {
  red: number;
  green: number;
  blue: number;
}

export interface IBaseLineChartProps {
  chartData: ChartData;
  options?: ChartOptions;
  gradients?: IBaseLineChartGradient[];
  fallbackText?: string;
}

@Component({
  name: 'BaseLineChart',
  extends: Line,
})
export default class BaseLineChart extends VueComponent<IBaseLineChartProps> {
  @Prop()
  private readonly chartData!: IBaseLineChartProps['chartData'];

  @Prop()
  private readonly options!: IBaseLineChartProps['options'];

  @Prop()
  private readonly gradients!: IBaseLineChartProps['gradients'];

  @Prop({ default: 'Linear graph' })
  private readonly fallbackText!: IBaseLineChartProps['fallbackText'];

  mounted(): void {
    if (this.gradients) {
      this.constructGradients(this.gradients);
    }

    this.renderChart(this.chartData, this.options);

    this.$nextTick(() => {
      this.$refs.canvas.setAttribute('aria-label', this.fallbackText);
      this.$refs.canvas.setAttribute('role', 'img');
    });
  }

  constructGradients(gradients: IBaseLineChartGradient[]) {
    gradients.forEach((gradient, index) => {
      const firstGradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
      firstGradient.addColorStop(0, 'rgba(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ',0.4)');
      firstGradient.addColorStop(0.3, 'rgba(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ',0.15)');
      firstGradient.addColorStop(0.5, 'rgba(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ',0.05)');
      firstGradient.addColorStop(1, 'rgba(' + gradient.red + ',' + gradient.green + ',' + gradient.blue + ',0)');

      if (this.chartData.datasets) {
        this.chartData.datasets[index].backgroundColor = firstGradient;
      }
    });
  }
}
