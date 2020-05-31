import { ChartOptions } from 'chart.js';

export const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        gridLines: {
          color: '#B0BAC9',
          borderDash: [3, 3],
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 125,
          fontColor: '#B0BAC9',
          callback: (value) => {
            let tempVal = value.toString();
            if (tempVal.length >= 4) tempVal = tempVal.substring(0, tempVal.length - 3) + 'k ';
            return '$' + tempVal;
          },
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          color: '#B0BAC9',
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: '#B0BAC9',
        },
      },
    ],
  },
  legend: {
    display: true,
    align: 'end',
    labels: {
      boxWidth: 10,
      usePointStyle: true,
      padding: 20,
      fontColor: '#B0BAC9',
    },
  },
  elements: {
    point: {
      radius: 5,
      hoverRadius: 4,
      borderWidth: 3,
      hoverBorderWidth: 3,
    },
  },
};
