export const options = {
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
      fontFamily: 'Rubik, system-ui, sans-serif',
    },
  },
  elements: {
    point: {
      radius: 5,
      hoverRadius: 4,
      borderWidth: 3,
      hoverBorderWidth: 3,
      backgroundColor: '#FFF',
    },
  },
};
